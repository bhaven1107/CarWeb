import { useState } from "react";
import { OtpVerify } from "../../Services/authSservice";
import { useNavigate } from "react-router-dom";

const useOtpLogic = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]); // 4 digits
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // auto-focus next input
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
            const email = localStorage.getItem("resetEmail"); // ✅ get email

            const res = await OtpVerify({
                email,
                otp: otpCode
            });

            alert(res.data.message || "OTP verified successfully");
            navigate("/Reset-Password");
        } catch (err) {
            setError(err.response?.data?.message || "OTP verification failed");
        } finally {
            setLoading(false);
        }
    };


    return { otp, loading, error, handleChange, handleSubmit };
};

export default useOtpLogic;
