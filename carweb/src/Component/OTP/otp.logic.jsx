import { useState } from "react";
import { OtpVerify } from "../../Services/authSservice";
import { useNavigate } from "react-router-dom";

const useOtpLogic = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const otpCode = otp.join("");
            const email = localStorage.getItem("resetEmail");
            if (!email) throw new Error("Email not found. Start forgot password flow again.");

            const res = await OtpVerify({ email, otp: otpCode });
            if (res.data.token) localStorage.setItem("resetToken", res.data.token);
            else throw new Error("OTP verification did not return a token");

            alert(res.data.message);
            navigate("/reset-password");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "OTP verification failed");
        } finally {
            setLoading(false);
        }
    };

    return { otp, loading, error, handleChange, handleSubmit };
};

export default useOtpLogic;
