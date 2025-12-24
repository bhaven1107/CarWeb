import { useState } from "react";
import { login } from "../../Services/authSservice";
import { useNavigate } from "react-router-dom";

const useLoginLogic = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await login(formData);
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/Dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        showPassword,
        loading,
        error,
        handleChange,
        handleSubmit,
        togglePassword,
    };
};

export default useLoginLogic;
