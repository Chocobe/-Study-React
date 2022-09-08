import fs from "fs";
import path from "path";
import matter from "gray-matter";

console.log("Hello World");

const postsDirectory = path.resolve(process.cwd(), "posts");
console.log("postsDirectory: ", postsDirectory);

export default postsDirectory;