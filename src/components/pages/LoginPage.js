import React, { useState } from 'react';
import LoginModal from '../organisms/login/LoginModal';
import RegisterModal from '../organisms/login/RegisterModal';
import './LoginPage.css';

export default function LoginPage() {
    const [modalType, setModalType] = useState("login"); // "login" ose "register"
    const [open, setOpen] = useState(true);

    function handleLogin(email, password) {
        console.log("Login:", email, password);
        window.location.href = "/dashboard";
    }

    function handleRegister(data) {
        console.log("Register:", data);
        // Trajto regjistrimin këtu
    }

    return (
        <>
            {modalType === "login" && (
                <LoginModal
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={handleLogin}
                    onGoogle={() => console.log("Google login")}
                    onFacebook={() => console.log("Facebook login")}
                    onRegisterClick={() => setModalType("register")}
                />
            )}

            {modalType === "register" && (
                <RegisterModal
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={handleRegister}
                    onLoginClick={() => setModalType("login")}
                />
            )}
        </>
    );
}
