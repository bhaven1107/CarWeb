import React from "react";
import useForgetPasswordLogic from "./forgetpassword.logic";
import "./forgetpassword.css";

const ForgetPassword = () => {
    const { email, loading, error, success, handleChange, handleSubmit } =
        useForgetPasswordLogic();

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="forget-card shadow-lg p-4">
                <h2 className="text-center mb-3 forget-title">Forgot Password</h2>

                <p className="text-center mb-4 text-sec">
                    Enter your email to reset your password
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="custom-input"
                            placeholder="E-mail"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}

                    <button
                        type="submit"
                        className="btn btn-forget w-100"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
