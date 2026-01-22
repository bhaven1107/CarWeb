import api from "./CarApi";
import axios from "axios";

export const login = (data) => {
    return api.post("http://localhost:5000/api/auth/login", data);
};

export const register = (data) => {
    return axios.post("http://localhost:5000/api/auth/register", data);
};

export const Forgetpass = (data) => {
    return axios.post("http://localhost:5000/api/auth/forget-password", data);
};

export const resetpass = (data, token) => {
    return axios.post(
        "http://localhost:5000/api/auth/reset-password",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}` // send token in header
            }
        }
    );
};

export const OtpVerify = (data) => {
    return axios.post("http://localhost:5000/api/auth/verify-otp", data);
};

export const getHomeSliders = () => {
    return api.get("http://localhost:5000/api/Home/slider");
};

export const getHomeServices = () => {
    return api.get("http://localhost:5000/api/Home/Service");
}

export const getAllCategories = () => {
    return api.get("http://localhost:5000/api/Home/category")
}

export const getAllAds = () => {
    return api.get("http://localhost:5000/api/home/bestselling");
}

export const getAllCollections = () => {
  return api.get("http://localhost:5000/api/home/collections");
};

export const getAllTestimonials = () => {
    return api.get("http://localhost:5000/api/home/testimonials");
}

export const getAllBrands = () => {
    return api.get("http://localhost:5000/api/home/brands");
}

export const getProductDetails = (id) => { 
    return api.get(`http://localhost:5000/api/home/collections/${id}`);
 }