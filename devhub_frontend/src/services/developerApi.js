import api from "./api";


export const getDevelopers = () => api.get("developers/");
export const createDeveloper = data => api.post("developers/", data);
export const updateDeveloper = (id, data) => api.put(`developers/${id}/`, data);
export const deleteDeveloper = id => api.delete(`developers/${id}/`);