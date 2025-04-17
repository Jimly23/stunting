import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const addHistory = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/history`, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
}

export const getHistory = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/api/history/username/${username}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}