import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const nextjsDirectory = path.join(process.cwd(), "nextjs");

export const getSortedNextjsData = () => {
  const fileNames = fs.readdirSync(nextjsDirectory);

  const allNextjsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(nextjsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data as { title: string; date: string; },
    };
  });

  return allNextjsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllNextjsIds = () => {
  const fileNames = fs.readdirSync(nextjsDirectory);

  return fileNames.map(fileName => fileName.replace(/\.md$/, ""));
}

export const getNextjsData = async (id: string) => {
  const fullPath = path.join(nextjsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const htmlContent = processedContent.toString();

  return {
    id,
    htmlContent,
    ...matterResult.data as { title: string; date: string; },
  };
};