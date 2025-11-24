import React from 'react';

export default function Button({ text, onClick, style }) {

    const renderIcon = () => {
        if (text === "Google") {
            return (
                <img 
                    src="https://homelengo.vercel.app/images/logo/google.jpg"
                    alt="Google" 
                    style={{ width: 20, height: 20, marginRight: 8 }} 
                />
            );
        }
        if (text === "Facebook") {
            return (
                <img 
                    src="https://homelengo.vercel.app/images/logo/fb.jpg" 
                    alt="Facebook" 
                    style={{ width: 20, height: 20, marginRight: 8 }} 
                />
            );
        }
        return null;
    };

    return (
        <button className="login-button" onClick={onClick} style={style}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {renderIcon()}
                {text}
            </div>
        </button>
    );
}
