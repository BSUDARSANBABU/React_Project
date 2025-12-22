import api from "./api";


export const login = async (username, password) => {
const res = await api.post("token/", { username, password });
localStorage.setItem("token", res.data.access);
return res.data;
};


export const logout = () => {
localStorage.removeItem("token");
};


export const isAuthenticated = () => {
return !!localStorage.getItem("token");
};