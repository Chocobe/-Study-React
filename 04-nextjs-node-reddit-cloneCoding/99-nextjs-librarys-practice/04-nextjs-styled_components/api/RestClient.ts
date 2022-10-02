import axiosInstance from "./";
import { NewsItem } from "entities";

export type ApiManagerGetParams = {
  url: string;
  params?: any;
  callback?: Function;
};

const RestClient = {
  get: async ({
    url,
    params,
    callback,
  }: ApiManagerGetParams) => {
    try {
      const response = await axiosInstance.get<NewsItem[]>(url, { params });

      if (callback && typeof callback === "function") {
        callback();
      }

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default RestClient;