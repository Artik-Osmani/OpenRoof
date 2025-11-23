// src/components/organisms/AboutHero.js (UPDATED)
import React from 'react';
import HeroContent from '../molecules/HeroContent';
import './AboutHero.css'; // Importing the new CSS

export default function AboutHero({ title, description }) {
    return (
        <section className="about-hero-wrapper">
            <HeroContent title={title} text={description} />
        </section>
    );
}