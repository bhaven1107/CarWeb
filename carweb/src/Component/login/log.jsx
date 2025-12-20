import React from 'react';
import { useNavigate } from "react-router-dom";
import "./log.css";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Sign In</h2>

                <form>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="custom-input"
                            placeholder="E-mail"
                        />
                    </div>

                    <div className="mb-2">
                        <input
                            type="password"
                            className=" custom-input"
                            placeholder="Password"
                        />
                    </div>

                    {/* 👇 Forgot password */}
                    <div className="text-end mb-3">
                        <span
                            className="forgot-link"
                            onClick={() => navigate("/forgot-password")}
                        >
                            Forgot Password?
                        </span>
                    </div>

                    <button type="submit" className="btn btn-login w-100 mb-3">
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="btn btn-register w-100"
                        onClick={() => navigate("/register")}
                    >
                        Don't have an account? Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
