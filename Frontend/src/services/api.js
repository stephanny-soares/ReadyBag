import axios from 'axios';

// Usa variables de entorno públicas de Expo (sin build extra)
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

// Interceptor para añadir JWT cuando tengáis auth integrada
api.interceptors.request.use(async (config) => {
  // TODO: Leer token desde SecureStore/AsyncStorage
  const token = null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);
