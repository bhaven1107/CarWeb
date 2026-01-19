import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Services/authService";

const useRegisterLogic = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.password) {
            setError("All fields are required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            await register(formData);

            alert("Registration successful");
            navigate("/login");

        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        loading,
        error,
        showPassword,
        togglePassword,
    };
};

export default useRegisterLogic;
