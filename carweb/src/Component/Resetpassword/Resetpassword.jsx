import React from "react";
import useResetPasswordLogic from "./Resetpassword.logic";
import { useNavigate } from "react-router-dom";
import "./Resetpassword.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { formData, loading, error, handleChange, handleSubmit } =
        useResetPasswordLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Reset Password</h2>
                <p className="text-center mb-4" style={{ color: "#fff", fontSize: "14px" }}>
                    Enter your new password below
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            className="custom-input"
                            placeholder="New Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            name="confirmPassword"
                            className="custom-input"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
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
