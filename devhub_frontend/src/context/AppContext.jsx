import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    api.get("technologies/").then(res => setTechnologies(res.data));
  }, []);

  return (
    <AppContext.Provider value={{ technologies }}>
      {children}
    </AppContext.Provider>
  );
}
