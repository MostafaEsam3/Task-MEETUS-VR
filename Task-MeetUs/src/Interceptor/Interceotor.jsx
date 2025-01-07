import axios from "axios";
import Cookies from "js-cookie"; 

const Api_Dashboard = axios.create({
  baseURL: "https://api-yeshtery.dev.meetusvr.com/v1",
  headers: {
    Accept: "application/json", 
  },
});

Api_Dashboard.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token-"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api_Dashboard.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove("token-"); 
    }
    return Promise.reject(error);
  }
);

export default Api_Dashboard;
