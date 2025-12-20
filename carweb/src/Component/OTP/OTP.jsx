import React from "react";
import { useNavigate } from "react-router-dom";
import "./otp.css"; // Reuse the same CSS as login

const OTP = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Enter OTP</h2>
                <p className="text-center mb-4" style={{ color: "#fff", fontSize: "14px" }}>
                    We have sent a 4-digit code to your email/phone
                </p>

                <form>
                    <div className="d-flex justify-content-between mb-4" style={{ gap: "10px" }}>
                        <input type="text" maxLength="1" className=" custom-input otp-input" />
                        <input type="text" maxLength="1" className=" custom-input otp-input" />
                        <input type="text" maxLength="1" className=" custom-input otp-input" />
                        <input type="text" maxLength="1" className=" custom-input otp-input" />
                    </div>

                    <button type="submit" className="btn btn-login w-100 mb-3">
                        Verify OTP
                    </button>

                    <span
                        className="forgot-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/forgot-password")}
                    >
                        Didn't receive OTP? Resend
                    </span>
                </form>
            </div>
        </div>
    );
};

export default OTP;
