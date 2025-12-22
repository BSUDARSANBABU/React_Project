import api from "../services/api";
import { convertToWebP } from "./convertToWebp";

export const uploadImage = async (file, endpoint) => {
  const webp = await convertToWebP(file);

  const formData = new FormData();
  formData.append("image", webp);

  const res = await api.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });

  return res.data;
};
