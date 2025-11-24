import React from 'react';
import RegisterForm from '../../molecules/login/RegisterForm';

export default function RegisterModal({ open, onClose, onSubmit, onLoginClick }) {
    if (!open) return null;

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <button className="login-close" onClick={onClose}>×</button>

                <div className="login-left">
                    <img src="https://homelengo.vercel.app/images/banner/banner-account1.jpg" alt="bg" />
                </div>

                <div className="login-right">
                    <RegisterForm
                        onSubmit={onSubmit}
                        onLoginClick={onLoginClick}
                    />
                </div>
            </div>
        </div>
    );
}
