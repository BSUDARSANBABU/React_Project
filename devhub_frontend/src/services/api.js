import axios from "axios";
const BASE_API_URL ="https://react-project-4-704p.onrender.com"

const api = axios.create({
baseURL: BASE_API_URL,
});


api.interceptors.request.use(config => {
const token = localStorage.getItem("token");
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
});


export default api;