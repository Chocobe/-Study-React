import axios from "axios";

const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";
const COUNTRY = "kr";

const axiosInstance = axios.create({
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
  },
});

const sendRequest = async (
  requestMethod: Function,
  callback?: Function
) => {
  try {
    const response = await requestMethod();

    if (callback && typeof callback === "function") {
      callback();
    }

    return response;
  } catch (error) {
    throw error;
  }
};

const RestClient = {
  get: (url: string, params: any) => {
    const requestMethod = () => axiosInstance.get(url, { params });
    return sendRequest(requestMethod);
  }
};

export default RestClient;