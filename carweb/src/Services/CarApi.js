import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // only domain + port
    headers: {
        "Content-Type": "application/json",
    },
});

// Optional: attach JWT automatically if stored in localStorage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // wherever you store JWT
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
