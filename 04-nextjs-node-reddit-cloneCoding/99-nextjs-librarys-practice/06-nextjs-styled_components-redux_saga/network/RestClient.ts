import axios, {
  AxiosRequestConfig
} from "axios";

// const BASE_URL = "https://newsapi.org/v2/top-headlines";
// const COUNTRY = "kr";
// const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";

const instance = axios.create();

const sendRequest = async ({
  requestMethod,
  url,
  payloadOrConfig = {},
  config = {},
  callback,
}: {
  requestMethod: Function;
  url: string;
  payloadOrConfig?: any;
  config?: AxiosRequestConfig;
  callback?: () => void;
}) => {
  try {
    const response = await requestMethod(url, payloadOrConfig, config);

    if (callback && typeof callback === "function") {
      callback();
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const RestClient = {
  get: (
    url: string,
    params?: Record<string, string>,
    config: AxiosRequestConfig = {},
    callback?: () => void
  ) => {
    const mergedConfig = {
      ...config,
      params,
    };
    
    return sendRequest({
      requestMethod: instance.get,
      url,
      payloadOrConfig: mergedConfig,
      callback,
    });
  },

  post: (
    url: string,
    payload: Record<string, string>,
    config: AxiosRequestConfig = {},
    callback?: () => void
  ) => {
    return sendRequest({
      requestMethod: instance.post,
      url,
      payloadOrConfig: payload,
      config,
      callback,
    });
  },

  put: (
    url: string,
    payload: Record<string, string>,
    config: AxiosRequestConfig = {},
    callback?: () => void
  ) => {
    return sendRequest({
      requestMethod: instance.put,
      url,
      payloadOrConfig: payload,
      config,
      callback,
    });
  },

  delete: (
    url: string,
    params: Record<string, string>,
    config: AxiosRequestConfig = {},
    callback?: () => void
  ) => {
    const mergedConfig = {
      ...config,
      params,
    };

    return sendRequest({
      requestMethod: instance.delete,
      url,
      payloadOrConfig: mergedConfig,
      callback,
    });
  },
};

export default RestClient;