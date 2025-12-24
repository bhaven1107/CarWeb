import React from "react";
import { useNavigate } from "react-router-dom";
import "./log.css";
import useLoginLogic from "./login.logic";

const Login = () => {
    const navigate = useNavigate();

    const {
        formData,
        showPassword,
        loading,
        error,
        handleChange,
        handleSubmit,
        togglePassword,
    } = useLoginLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="custom-input"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="custom-input"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <i
                            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"
                                } password-icon`}
                            onClick={togglePassword}
                        ></i>
                    </div>



                    {error && <p className="text-danger">{error}</p>}

                    <div className="text-end mb-3">
                        <span
                            className="forgot-link"
                            onClick={() => navigate("/forgot-password")}
                        >
                            Forgot Password?
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-login w-100 mb-3"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
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
