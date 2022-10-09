import axios, {
  AxiosRequestConfig,
} from "axios";

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
  payloadOrConfig?: Record<string, string> | FormData;
  config?: AxiosRequestConfig;
  callback?: Function;
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

const restClient = {
  get: (
    url: string,
    params: Record<string, string> = {},
    config: AxiosRequestConfig = {},
    callback?: Function
  ) => {
    const mergedConfig = { ...config, params } as any;
    
    return sendRequest({
      requestMethod: instance.get,
      url,
      payloadOrConfig: mergedConfig,
      callback,
    });
  },

  post: (
    url: string,
    payload: Record<string, any> | FormData = {},
    config: AxiosRequestConfig = {},
    callback?: Function
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
    payload: Record<string, any> | FormData = {},
    config: AxiosRequestConfig = {},
    callback?: Function
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
    params: Record<string, string> = {},
    config: AxiosRequestConfig = {},
    callback?: Function
  ) => {
    const mergedConfig = { ...config, params } as any;

    return sendRequest({
      requestMethod: instance.delete,
      url,
      payloadOrConfig: mergedConfig,
      callback,
    });
  },
};

export default restClient;