import React, { useState } from 'react';
import Input from '../../atoms/login/Input';
import Button from '../../atoms/login/Button';

export default function LoginForm({ onSubmit, onGoogle, onFacebook }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-form">
            <h2>Login</h2>

            <Input 
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
                text="Login"
                onClick={() => onSubmit(email, password)}
            />

            <div className="login-socials">
                <Button text="Google" onClick={onGoogle} />
                <Button text="Facebook" onClick={onFacebook} />
            </div>
        </div>
    );
}
