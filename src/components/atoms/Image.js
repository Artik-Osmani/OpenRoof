import React from 'react';
import '../atoms/Image.css';

export default function Image({ src, alt, className = '' }) {
    return <img src={src} alt={alt} className={`atom-image ${className}`} />;
}