import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/users`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, data);
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export const updateUser = async (data, id) => {
  try {
    const response = await axios.put(`${API_URL}/api/users/${id}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const checkEmail = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/reset-password/check-email`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/reset-password`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}