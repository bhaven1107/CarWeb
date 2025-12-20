import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Component/login/log';
import Register from '../Component/register/reg';
import ForgetPassword from '../Component/forgetpassword/forgetpassword';
import OTP from '../Component/OTP/OTP';
import ResetPassword from '../Component/Resetpassword/Resetpassword';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/Otp" element={<OTP />} />
                <Route path="/Reset-Password" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
