import React, {
  useState,
  useRef,
  useEffect,
  ChangeEventHandler,
} from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuthState } from "../../context/auth";
import SideBar from "../../components/SideBar";

function SubPage() {
  const { authenticated, user } = useAuthState();
  const [ownSub, setOwnSub] = useState(false);
  
  const router = useRouter();
  const subName = router.query.sub;

  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      
      console.log("Sub fetcher response: ", response);

      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };

  const { data: sub, error } = useSWR(
    subName ? `/subs/${subName}` : null,
    fetcher
  );

  const uploadImage: ChangeEventHandler<HTMLInputElement> = async event => {
    const files = event.target.files;

    if (!files) return;

    const file = files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", event.target.name);

    try {
      await axios.post(`/subs/${sub.name}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const openFileInput = (type: string) => {
    const fileInput = fileInputRef.current;

    if (fileInput) {
      fileInput.name = type;
      fileInput.click();
    }
  };

  useEffect(() => {
    if (!sub || !user) return;

    setOwnSub(authenticated && user.username === sub.username);
  }, [sub, user, authenticated]);

  return (
    <>
      {sub && (
        <>
          <div>
            {/* 파일 업로드 */}
            <input
              type="file"
              hidden={true}
              ref={fileInputRef}
              onChange={uploadImage}
            />
            {/*  베너 이미지 */}
            <div className="bg-gray-400">
              {sub.bannerUrl
                ? (
                  <div
                    className="h-56"
                    style={{
                      backgroundImage: `url(${sub.bannerUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => openFileInput("banner")}
                  />
                ) : (
                  <div
                    className="h-20 bg-gray-400"
                    onClick={() => openFileInput("banner")}
                  />
                )
              }
            </div>

            {/* 커뮤니티 메타 데이터 */}
            <div className="h-20 bg-white">
              <div className="relative flex max-w-5xl px-5 mx-auto">
                <div 
                  className="absolute"
                  style={{
                    top: "-15px",
                  }}
                >
                  {sub.imageUrl && (
                    // <div>
                    //   {sub.imageUrl}
                    // </div>
                    <Image
                      src={sub.imageUrl}
                      alt="커뮤니티 이미지"
                      width="70px"
                      height="70px"
                      className="rounded-full"
                      onClick={() => openFileInput("image")}
                    />
                  )}
                </div>

                <div className="pt-1 pl-24">
                  <div className="flex items-center ">
                    <h1 className="text-3xl font-bold">
                      {sub.title}
                    </h1>
                  </div>

                  <p className="text-small font-bold text-gray-400">
                    {sub.name}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* 포스트와 사이드바 */}
          <div className="flex max-w-5xl px-4 pt-5 mx-auto">
            <div className="w-full md:mr-3 md:w-8/12">
              <SideBar sub={sub} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SubPage;