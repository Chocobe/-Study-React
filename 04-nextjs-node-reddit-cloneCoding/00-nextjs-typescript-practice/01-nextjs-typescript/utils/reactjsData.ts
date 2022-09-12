import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify/lib";

const reactjsDirectory = path.join(process.cwd(), "posts", "reactjs");

export type ReactjsLinkData = {
  id: string;
  title: string;
  date: string;
  author: string;
}

export const getReactjsLinkData = (): ReactjsLinkData[] => {
  const fileNames = fs.readdirSync(reactjsDirectory);
  
  const reactjsLinkData = fileNames.map(fileName => {
    const fullPath = path.join(reactjsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContent);

    const { title, date, author } = matterResult.data as {
      title: string;
      date: string;
      author: string;
    };

    return {
      id: fileName.replace(/\.md$/, ""),
      title,
      date,
      author,
    };
  });

  return reactjsLinkData;
};

export const getReactjsData = async (id: string) => {
  // 1. 파일 읽어오기
  const fullPath = path.join(reactjsDirectory, `${id}.md`);

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  // 2. matter() 로 구문분석 하기
  const matterResult = matter(fileContent);

  const {
    title,
    author,
    date,
  } = matterResult.data as {
    title: string;
    author: string;
    date: string;
  };

  // 3. MD => HTML 변환
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content);

  const htmlContent = processedContent.toString();
  
  return {
    id,
    title,
    author,
    date,
    htmlContent,
  };
}