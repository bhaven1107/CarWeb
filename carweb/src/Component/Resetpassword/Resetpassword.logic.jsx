import { useState } from "react";
import { resetpass } from "../../Services/authService";
import { useNavigate } from "react-router-dom";

const useResetPasswordLogic = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ show/hide password states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const token = localStorage.getItem("resetToken");
        if (!token) {
            setError("Token not found. Please verify OTP again.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            await resetpass(formData, token);

            alert("Password reset successfully");
            localStorage.removeItem("resetToken");
            localStorage.removeItem("resetEmail");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        error,
        handleChange,
        handleSubmit,
        showPassword,
        showConfirmPassword,
        setShowPassword,
        setShowConfirmPassword,
    };
};

export default useResetPasswordLogic;
