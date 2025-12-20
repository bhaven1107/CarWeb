import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resetpassword.css"; // Reuse your existing CSS

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Reset Password</h2>
                <p className="text-center mb-4" style={{ color: "#fff", fontSize: "14px" }}>
                    Enter your new password below
                </p>

                <form>
                    <div className="mb-3">
                        <input
                            type="password"
                            className=" custom-input"
                            placeholder="New Password"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className=" custom-input"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button type="submit" className="btn btn-login w-100 mb-3">
                        Reset Password
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
