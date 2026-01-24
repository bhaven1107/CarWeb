import api from "./CarApi";

// Auth APIs
export const login = (data) => api.post("/api/auth/login", data);
export const register = (data) => api.post("/api/auth/register", data);
export const Forgetpass = (data) => api.post("/api/auth/forget-password", data);
export const resetpass = (data, token) =>
    api.post("/api/auth/reset-password", data, {
        headers: { Authorization: `Bearer ${token}` },
    });
export const OtpVerify = (data) => api.post("/api/auth/verify-otp", data);

// Home APIs
export const getHomeSliders = () => api.get("/api/home/slider");
export const getHomeServices = () => api.get("/api/home/service");
export const getAllCategories = () => api.get("/api/home/category");
export const getAllAds = () => api.get("/api/home/bestselling");
export const getAllCollections = () => api.get("/api/home/collections");
export const getAllTestimonials = () => api.get("/api/home/testimonials");
export const getAllBrands = () => api.get("/api/home/brands");
export const getProductDetails = (id) => api.get(`/api/home/collections/${id}`);
