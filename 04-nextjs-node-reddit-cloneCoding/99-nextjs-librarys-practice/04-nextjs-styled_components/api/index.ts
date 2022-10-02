import axios from "axios";

const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";
const COUNTRY = "kr";

const instance = axios.create({
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
  },
});

export default instance;