import React from 'react';
import logoImage from '../../assets/Screenshot 2025-11-19 203208.png';
export default function Logo({ src = logoImage, alt = "Company Logo" }) {
    return (
        <div>
            <img src={src} alt={alt} className="logo" />
        </div>
    );
}
