// src/components/organisms/TestimonialsSection.js
import React from 'react';
import TestimonialCard from '../molecules/TestimonialCard';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import './TestimonialsSection.css'; // New CSS file

// Placeholder image imports (You'll need to create these assets)
import avatar1 from '../../assets/agent-1.jpg';
import avatar2 from '../../assets/agent-1.jpg';
import avatar3 from '../../assets/agent-1.jpg';

const testimonialsData = [
    {
        quote: 'Përvoja ime me shërbimet e menaxhimit të pronave ka tejkaluar pritshmëritë. Ata menaxhojnë pronat me një qasje profesionale dhe të vëmendshme në çdo situatë.',
        name: 'Courtney Henry',
        title: 'CEO Themesflat',
        avatarSrc: avatar1,
        avatarAlt: 'Avatar Courtney Henry',
    },
    {
        quote: 'Ata menaxhojnë pronat me një qasje profesionale dhe të vëmendshme në çdo situatë. Jam i sigurt se çdo problem do të zgjidhet shpejt dhe në mënyrë efektive.',
        name: 'Esther Howard',
        title: 'CEO Themesflat',
        avatarSrc: avatar2,
        avatarAlt: 'Avatar Esther Howard',
    },
    {
        quote: 'Shërbimet e menaxhimit të pronave kanë tejkaluar pritshmëritë. Jam i sigurt se çdo problem do të zgjidhet shpejt dhe në mënyrë efektive.',
        name: 'Annette Black',
        title: 'CEO Themesflat',
        avatarSrc: avatar3,
        avatarAlt: 'Avatar Annette Black',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials-section-wrapper">
            <div className="testimonials-header">
                <Text text="DËSHMITË TONA" className="testimonials-subtitle" />
                <Title title="Çfarë Thonë Klientët" className="testimonials-title" />
                <Text text="Stafi ynë i stazhonuar shkëlqen në pasuritë e paluajtshme me vite të tëra navigimi të suksesshëm, duke ofruar vendime të informuara dhe rezultate optimale." className="testimonials-description" />
            </div>

            <div className="testimonials-grid">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        title={testimonial.title}
                        avatarSrc={testimonial.avatarSrc}
                        avatarAlt={testimonial.avatarAlt}
                    />
                ))}
            </div>
        </section>
    );
}