import React from 'react'
import "./reg.css"

const reg = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="register-card shadow-lg p-4">
                    <h2 className="text-center mb-4 register-title">Register</h2>

                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control custom-input"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control custom-input"
                                placeholder="E-mail"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="tel"
                                className="form-control custom-input"
                                placeholder="Phone"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control custom-input"
                                placeholder="Password"
                            />
                        </div>

                        {/* <div className="mb-4">
                            <input
                                type="password"
                                className="form-control custom-input"
                                placeholder="Confirm Password"
                            />
                        </div> */}

                        <button className="btn btn-register w-100 mb-3">
                            Register
                        </button>

                        <button className="btn btn-login w-100" style={{ color: "white" }}>
                            Have account? Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default reg;
