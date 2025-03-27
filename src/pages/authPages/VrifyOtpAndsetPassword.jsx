import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../pages/authPages/StyleSheet/CustomerRegisterVerify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BaseURL from "../../../config";
import {showErrorToast, showSuccessToast} from '../../utils/toastNotifications.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const MySwal = withReactContent(Swal);


const  VerifyOtpAndSetPasswordPopupForm = ({ onClose, onSuccess, user_id }) => {
    

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(300);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [errors, setErrors] = useState("");
    const APIUrl = BaseURL.API_BASE_URL;
    const [loading,setLoading]=useState(false)
    

    useEffect(() => {
        const storedTime = localStorage.getItem('remainingTime');
        if (storedTime) {
            setTimeLeft(JSON.parse(storedTime));
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                  onClose ()
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            localStorage.setItem('remainingTime', timeLeft);
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };
    
    const validateInputs = () => {
        let newErrors = [];
        if (password !== confirmPassword) {
            newErrors.push("Passwords do not match.");
        }
        if (password.length < 8) {
            newErrors.push("Password must be at least 8 characters.");
        }
        if (!/[A-Z]/.test(password)) {
            newErrors.push("Password must include at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            newErrors.push("Password must include at least one lowercase letter.");
        }
        if (!/[0-9]/.test(password)) {
            newErrors.push("Password must include at least one number.");
        }
        if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
            newErrors.push("Password must include at least one special character.");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors.join(" ")); // Show errors
            setTimeout(() => {
                setErrors("");
            }, 30000);
            return false;
        }
        return true;
    };

    const validateOtp = () => {
       
        const otpValue = otp.join("");
        if (otpValue.length !== 6) {
            setErrors("OTP must be exactly 6 digits.");
            setTimeout(() => {
                setErrors("");
            }, 3000);
            return false;
        }
        return true;
    };
    const handleOtpSubmit = async (e) => {
        setLoading(true);  
        e.preventDefault();
        if (!validateInputs() || !validateOtp()) {
            setLoading(false);  
            return;
        }
        const otpValue = otp.join("");
    
        try {
            const response = await fetch(`${APIUrl}/auth/system_staff_create_password/${user_id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ otp_code: otpValue, password: password, confirm_password: confirmPassword })
            });
            
            const result = await response.json();
    
            if (response.ok && result.status) {
                showSuccessToast(result.meta.message);  
                localStorage.setItem('token', result.data);  
                onSuccess();  
            } else {
                showErrorToast(result.meta?.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Request failed:", error);
            showErrorToast("Network error. Please try again.");
        } finally {
            setLoading(false);  
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <h2 className="text-center">OTP Verification</h2>
                <p className="text-center">An OTP has been sent to your email.</p>
                <div className="timer-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '20px 0'
                }}>
                    <div className="timer-circle" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '4px solid #f0f0f0',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px'
                    }}>
                        <div className="timer-progress" style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '-4px',
                            left: '-4px',
                            border: '4px solid #4CAF50',
                            borderTop: `4px solid ${timeLeft <= 60 ? '#dc3545' : '#4CAF50'}`,
                            borderRight: `4px solid ${timeLeft <= 60 ? '#dc3545' : '#4CAF50'}`,
                            transform: `rotate(${(timeLeft / 300) * 360}deg)`,
                            transition: 'transform 1s linear',
                            animation: timeLeft <= 60 ? 'pulse 1s infinite' : 'none'
                        }}></div>
                        <span style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: timeLeft <= 60 ? '#dc3545' : '#4CAF50',
                            zIndex: 1
                        }}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                    <style>
                        {`
                            @keyframes pulse {
                                0% { transform: rotate(${(timeLeft / 300) * 360}deg) scale(1); }
                                50% { transform: rotate(${(timeLeft / 300) * 360}deg) scale(1.05); }
                                100% { transform: rotate(${(timeLeft / 300) * 360}deg) scale(1); }
                            }
                            .timer-circle::before {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                background: white;
                            }
                        `}
                    </style>
                </div>
                <form onSubmit={handleOtpSubmit}>
                    <div className="otp-inputs">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                className="otp-input"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                            <button type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={isConfirmPasswordVisible ? 'text' : 'password'}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                            <button type="button" onClick={toggleConfirmPasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
                                <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    {errors && <p style={{ color: 'red' }}>{errors}</p>}
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="StaffEmailVerify-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Verify and set your password"}
          </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

const OpenVerifyOtpAndSetPasswordPopup = () => {
    const navigate = useNavigate();
    const params = useParams();
    const user_id = params?.staff_id; 
    console.log("Extracted user_id:", user_id);

    const handleClose = () => {
        Swal.close();
        navigate("/staff-login");
    };

    const handleSuccess = () => {
    };

    MySwal.fire({
        showConfirmButton: false,
        allowOutsideClick: false,
        html: `<div id="otp-container"></div>`,
        customClass: {
            popup: "responsive-otp-popup animate__animated",
        },
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeInUp",
        },
        didOpen: () => {
            const container = document.getElementById("otp-container");
            if (container) {
                ReactDOM.createRoot(container).render(
                    <VerifyOtpAndSetPasswordPopupForm 
                        onClose={handleClose}
                        onSuccess={handleSuccess}
                        user_id={user_id}
                    />
                );
            }
        },
        willClose: () => {
        }
    });
    return null;
};
export default OpenVerifyOtpAndSetPasswordPopup;