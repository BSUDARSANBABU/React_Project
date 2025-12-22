import api from "./api";

export const getServices = async () => {
  const response = await api.get("/services/");
  return response.data;
};

export const createService = data => api.post("/services/", data);
export const updateService = (id, data) => api.put(`/services/${id}/`, data);
export const deleteService = id => api.delete(`/services/${id}/`);