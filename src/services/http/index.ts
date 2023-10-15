import axios from "axios";

export const API_URL = "https://api.sereni-fy.com";
// export const API_URL = "http://localhost:8000";

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error("Invalid headers");
  }

  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      try {
        return refresh(err);
      } catch (err) {
        localStorage.removeItem("token");
      }
    }
    return Promise.reject(err);
  }
);

const refresh = async (err: any) => {
  const initialUrl: string = err.response.config.url;

  const res = await axios.get(`${API_URL}/auth/refresh`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
  });
  localStorage.setItem("token", res.data.accessToken);
  const initialRes = await $api.get(`${initialUrl}`);

  return initialRes;
};
