import { useState } from "react";
import { Forgetpass } from "../../Services/authSservice"; // adjust path
import { useNavigate } from "react-router-dom";

const useForgetPasswordLogic = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await Forgetpass({ email });
            setSuccess(res.data.message || "Reset link sent to your email!");
            navigate("/verify-otp");       
        } catch (err) {
            setError(err.response?.data?.message || "Failed to send reset link");
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        loading,
        error,
        success,
        handleChange,
        handleSubmit,
    };
};

export default useForgetPasswordLogic;
