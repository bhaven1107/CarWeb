import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Component/login/log';
import Register from '../Component/register/reg';
import ForgetPassword from '../Component/forgetpassword/forgetpassword';
import OTP from '../Component/OTP/OTP';
import ResetPassword from '../Component/Resetpassword/Resetpassword';
import Home from '../Component/Home/Home';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/verify-otp" element={<OTP />} />
                <Route path="/Reset-Password" element={<ResetPassword />} />
                <Route path="/Dashboard" element={< Home/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
