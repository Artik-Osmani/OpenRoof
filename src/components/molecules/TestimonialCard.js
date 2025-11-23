// src/components/molecules/TestimonialCard.js (UPDATED SVG)
import React from 'react';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import './TestimonialCard.css';

const QuoteIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0A41FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="quote-icon"
    >
        <path d="M7 10c-1.7 0-3 1.3-3 3s1.3 3 3 3h1v1H7c-2.8 0-5-2.2-5-5s2.2-5 5-5h1v3H7z" />
        <path d="M17 10c-1.7 0-3 1.3-3 3s1.3 3 3 3h1v1h-1c-2.8 0-5-2.2-5-5s2.2-5 5-5h1v3h-1z" />
    </svg>
);

export default function TestimonialCard({ quote, name, title, avatarSrc, avatarAlt }) {
    return (
        <div className="testimonial-card">
            <QuoteIcon />
            <Text text={quote} className="testimonial-quote" />

            <div className="testimonial-footer">
                <Image src={avatarSrc} alt={avatarAlt} className="testimonial-avatar" />
                <div className="author-info">
                    <Text text={name} className="author-name" />
                    <Text text={title} className="author-title" />
                </div>
            </div>
        </div>
    );
}