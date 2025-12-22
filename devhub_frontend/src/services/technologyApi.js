import api from "./api";


export const getTechnologies = () => api.get("technologies/");
export const createTechnology = data => api.post("technologies/", data);
export const updateTechnology = (id, data) => api.put(`technologies/${id}/`, data);
export const deleteTechnology = id => api.delete(`technologies/${id}/`);