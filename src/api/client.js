
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;

export function getErrorMessage(error) {
  const data = error.response?.data;
  return (
    (typeof data?.errors === "string" && data.errors) ||
    data?.message ||
    "Something went wrong. Please try again."
  );
}