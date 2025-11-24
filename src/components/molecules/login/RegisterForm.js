import React, { useState } from 'react';
import Input from '../../atoms/login/Input';
import Button from '../../atoms/login/Button';

export default function RegisterForm({ onSubmit, onLoginClick }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        onSubmit({ username, email, password, confirmPassword });
    }

    return (
        <div className="login-form">
            <h2>Register</h2>

            <label className="login-label">User name</label>
            <Input
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label className="login-label" style={{ marginTop: "10px" }}>Email address</label>
            <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className="login-label" style={{ marginTop: "10px" }}>Password</label>
            <Input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label className="login-label" style={{ marginTop: "10px" }}>Confirm password</label>
            <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
                text="Sign Up"
                onClick={handleSubmit}
                style={{ marginTop: "15px" }}
            />

            <div className="login-register" style={{ marginTop: "10px" }}>
                Already have an account?{" "}
                <span
                    style={{ color: '#1664ff', cursor: 'pointer' }}
                    onClick={onLoginClick}
                >
                    Sign In
                </span>
            </div>

            <div className="login-socials" style={{ marginTop: "10px" }}>
                <Button text="Google" onClick={() => console.log("Google login")} />
                <Button text="Facebook" onClick={() => console.log("Facebook login")} />
            </div>
        </div>
    );
}
