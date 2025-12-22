// src/context/AuthContext.jsx
import { createContext, useState } from "react";
import API from "../services/api";


export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);


    const login = async (username, password) => {
        const res = await API.post("/token/", { username, password });
        localStorage.setItem("token", res.data.access);
        setUser(username);
    };


    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}