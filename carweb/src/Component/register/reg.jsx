import React from "react";
import { useNavigate } from "react-router-dom";
import "./reg.css";
import useRegisterLogic from "./Register.logic"; // <-- FIXED

const Register = () => {
    const navigate = useNavigate();
    const { formData, handleChange, handleSubmit, loading, error ,showPassword,togglePassword 
    } = useRegisterLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="register-card shadow-lg p-4">
                <h2 className="text-center mb-4 register-title">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="custom-input"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

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

                    <div className="mb-3">
                        <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            className="custom-input"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3 password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="custom-input"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <i
                            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                            onClick={togglePassword}
                            style={{ cursor: "pointer", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                        ></i>
                    </div>


                    {error && <p className="text-danger">{error}</p>}

                    <button type="submit" className="btn btn-register w-100 mb-3" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-login w-100"
                        onClick={() => navigate("/login")}
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
