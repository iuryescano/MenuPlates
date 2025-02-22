import axios from 'axios';

export const api = axios.create({
  baseURL: "https://menuplates-service.onrender.com"
});