import axios from "axios";

const URL = "https://api.hnpwa.com/v0";

const URI_MAP = {
  NEWS: "news",
  NEWEST: "newest",
  ASK: "ask",
  SHOW: "show",
  JOBS: "jobs",
};

const METHOD = {
  GET: "get",
};

const createRequest = (method, uri) => 
  id => axios[method](`${URL}/${uri}/${id}.json`);

export const getNews = createRequest(METHOD.GET, URI_MAP.NEWS);
export const getNewest = createRequest(METHOD.GET, URI_MAP.NEWEST);
export const getAsk = createRequest(METHOD.GET, URI_MAP.ASK);
export const getShow = createRequest(METHOD.GET, URI_MAP.SHOW);
export const getJobs = createRequest(METHOD.GET, URI_MAP.JOBS);
