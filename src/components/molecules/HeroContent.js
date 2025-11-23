// src/components/molecules/HeroContent.js (UPDATED)
import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import './HeroContent.css'; // Importing the new CSS

export default function HeroContent({ title, text }) {
    return (
        <div className="hero-content">
            <Title title={title} className="hero-title" />
            <Text text={text} className="hero-text" />
        </div>
    );
}