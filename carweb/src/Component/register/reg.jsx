import React from 'react';
import { useNavigate } from "react-router-dom";
import "./reg.css";

const Register = () => {

    const navigate = useNavigate();

    const gotologin = () => {
        navigate("/login");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="register-card shadow-lg p-4">
                <h2 className="text-center mb-4 register-title">Register</h2>

                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            className=" custom-input"
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            className=" custom-input"
                            placeholder="E-mail"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="tel"
                            className=" custom-input"
                            placeholder="Phone"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className=" custom-input"
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" className="btn btn-register w-100 mb-3">
                        Register
                    </button>

                    <button
                        type="button"
                        className="btn btn-login w-100"
                        onClick={gotologin}
                        style={{ color: "white" }}
                    >
                        Have account? Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
