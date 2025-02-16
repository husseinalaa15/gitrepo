import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

githubApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_GITHUB_API_TOKEN;
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

export default githubApi;
