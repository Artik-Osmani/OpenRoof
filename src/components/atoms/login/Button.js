import React from 'react';

export default function Button({ text, onClick, style }) {
    return (
        <button className="login-button" onClick={onClick} style={style}>
            {text}
        </button>
    );
}
