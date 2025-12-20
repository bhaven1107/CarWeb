import React, { useState } from "react";
import "./log.css";

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="auth-card p-4">
                <h2 className="auth-title text-center mb-4">
                    {isLogin ? "Login" : "Register"}
                </h2>

                <form>
                    {!isLogin && (
                        <div className="mb-3">
                            <input
                                className="form-control auth-input"
                                placeholder="Full Name"
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <input
                            className="form-control auth-input"
                            placeholder="E-mail"
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-3">
                            <input
                                className="form-control auth-input"
                                placeholder="Phone"
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <input
                            className="form-control auth-input"
                            placeholder="Password"
                            type="password"
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-4">
                            <input
                                className="form-control auth-input"
                                placeholder="Confirm Password"
                                type="password"
                            />
                        </div>
                    )}

                    <button className="btn btn-auth-main w-100 mb-3">
                        {isLogin ? "LOGIN" : "REGISTER"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-auth-switch w-100"
                        style={{ color: "white" }}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin
                            ? "Don't have an account? Register"
                            : "Have account? Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
