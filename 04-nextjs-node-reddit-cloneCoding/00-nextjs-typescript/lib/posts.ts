import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");
    
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data as { date: string; title: string },
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};










// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.resolve(process.cwd(), "posts");
// console.log("process.cwd(): ", process.cwd());
// console.log("postsDirectory: ", postsDirectory);

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   console.log("fileNames: ", fileNames);

//   const allPostsData = fileNames.map(fileName => {
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf-8");

//     const id = fileName.replace(/\.md$/, "");

//     const matterResult = matter(fileContents);

//     return {
//       id,
//       ...matterResult.data as { date: string; title: string },
//     };
//   });

//   return allPostsData.sort(({ date: a }, { date: b }) => {
//     if (a < b ) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// };