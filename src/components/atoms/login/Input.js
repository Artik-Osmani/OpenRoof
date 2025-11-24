import React from 'react';

export default function Input({ type = "text", placeholder, value, onChange,icon

 }) {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className="login-input"
            value={value}
            onChange={onChange}
        />
    );
}
