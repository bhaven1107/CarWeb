import React from "react";
import useOtpLogic from "./otp.logic";
import { useNavigate } from "react-router-dom";
import "./otp.css";

const OTP = () => {
    const navigate = useNavigate();
    const { otp, loading, error, handleChange, handleSubmit } = useOtpLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-card shadow-lg p-4">
                <h2 className="text-center mb-4 login-title">Enter OTP</h2>
                <p className="text-center mb-4" style={{ color: "#fff", fontSize: "14px" }}>
                    We have sent a 4-digit code to your email/phone
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between mb-4" style={{ gap: "10px" }}>
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                id={`otp-${i}`}
                                type="text"
                                maxLength="1"
                                className="custom-input otp-input"
                                value={digit}
                                onChange={(e) => handleChange(e, i)}
                            />
                        ))}
                    </div>

                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-login w-100 mb-3" disabled={loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
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
