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


export const resetpass = (data) => {
    return axios.post("http://localhost:5000/api/auth/reset-password", data);
};

export const OtpVerify = (data) => {
    return axios.post("http://localhost:5000/api/auth/verify-otp", data);
};
