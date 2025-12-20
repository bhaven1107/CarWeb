import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgetpassword.css"; // correct import

const ForgetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="forget-card shadow-lg p-4">
                <h2 className="text-center mb-3 forget-title">Forgot Password</h2>

                <p className="text-center mb-4 text-sec">
                    Enter your email to reset your password
                </p>

                <form>
                    <div className="mb-3">
                        <input
                            type="email"
                            className=" custom-input"
                            placeholder="E-mail"
                        />
                    </div>

                    <button type="submit" className="btn btn-forget w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
