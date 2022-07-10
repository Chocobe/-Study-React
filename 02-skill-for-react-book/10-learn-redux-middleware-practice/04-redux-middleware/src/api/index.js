import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = id => instance.get(
  `/posts/${id}`
);

export const getPhotos = id => instance.get(
  `/photos/${id}`
);

// const api = {
//   getPost: id => instance.get(`posts/${id}`),
//   getPhotos: id => instance.get(`photos/${id}`),
// };

// export default api;