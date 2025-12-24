import React from "react";
import useResetPasswordLogic from "./Resetpassword.logic";
import { useNavigate } from "react-router-dom";
import "./Resetpassword.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const {
        formData,
        loading,
        error,
        handleChange,
        handleSubmit,
        showPassword,
        showConfirmPassword,
        setShowPassword,
        setShowConfirmPassword,
    } = useResetPasswordLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Reset Password</h2>
                <p className="text-center mb-4" style={{ color: "#fff", fontSize: "14px" }}>
                    Enter your new password
                </p>

                <form onSubmit={handleSubmit}>
                    {/* New Password */}
                    <div className="mb-3 position-relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="custom-input pe-5"
                            placeholder="New Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <i
                            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#aaa",
                                fontSize: "16px",
                            }}
                        ></i>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-3 position-relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            className="custom-input pe-5"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <i
                            className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{
                                position: "absolute",
                                right: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#aaa",
                                fontSize: "16px",
                            }}
                        ></i>
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-login w-100 mb-3" disabled={loading}>
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>

                    <span
                        className="forgot-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Back to Login
                    </span>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
