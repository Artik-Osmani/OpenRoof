import React, { useState } from 'react';
import LoginModal from '../organisms/login/LoginModal';
import './LoginPage.css'

export default function LoginPage() {
    const [open, setOpen] = useState(true);

    function handleLogin(email, password) {
        console.log("Login:", email, password);
        // redirect to dashboard
        window.location.href = "/dashboard";
    }

    return (
        <>
            <LoginModal 
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={handleLogin}
                onGoogle={() => console.log("Google login")}
                onFacebook={() => console.log("Facebook login")}
            />
        </>
    );
}
