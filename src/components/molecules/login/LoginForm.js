import React, { useState } from 'react';
import Input from '../../atoms/login/Input';
import Button from '../../atoms/login/Button';

export default function LoginForm({ onSubmit, onGoogle, onFacebook, onRegisterClick }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-form">
            <h2>Login</h2>

            <label className="login-label">Account</label>
            <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="login-label" style={{ marginTop: "10px" }}>Password</label>
            <Input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="login-forgot">
                <a href="/forgot-password">Forgot password</a>
            </div>

            <Button
                text="Login"
                onClick={() => onSubmit(name, password)}
            />

            <div className="login-register" style={{ marginTop: "10px" }}>
                Don’t you have an account?{" "}
                <span
                    style={{ color: '#1664ff', cursor: 'pointer' }}
                    onClick={onRegisterClick}
                >
                    Register
                </span>
            </div>

            <div className="login-socials" style={{ marginTop: "10px" }}>
                <Button text="Google" onClick={onGoogle} />
                <Button text="Facebook" onClick={onFacebook} />
            </div>
        </div>
    );
}
