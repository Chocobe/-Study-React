import React, {
  useEffect,
} from "react";
import { useRouter } from "next/router";

function News() {
  const router = useRouter();

  useEffect(() => {
    router.push("/News/business");
  }, [router]);
}

export default News;