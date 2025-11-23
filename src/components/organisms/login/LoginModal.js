import React from 'react';
import LoginForm from '../../molecules/login/LoginForm';

export default function LoginModal({ open, onClose, onSubmit, onGoogle, onFacebook }) {
    if (!open) return null;

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <button className="login-close" onClick={onClose}>×</button>

                <div className="login-left">
                    <img src="https://homelengo.vercel.app/images/banner/banner-account1.jpg" alt="bg" />
                </div>

                <div className="login-right">
                    <LoginForm 
                        onSubmit={onSubmit}
                        onGoogle={onGoogle}
                        onFacebook={onFacebook}
                    />
                </div>
            </div>
        </div>
    );
}
