import axios, { AxiosInstance } from "axios";
import { parse } from "cookie"

const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

http.interceptors.request.use(async (config) => {
  if ((config.method as string).toLowerCase() !== 'get') {
    await http.get(process.env.NEXT_PUBLIC_API_URL + '/csrf-cookie').then();
    const cookies = parse(document.cookie);
    config.headers['X-XSRF-TOKEN'] = cookies["XSRF-TOKEN"] ?? "";
  }

  return config;
});

export default http;