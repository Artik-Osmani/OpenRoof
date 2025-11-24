import React from 'react';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import './TestimonialCard.css';

// Changed from SVG to a Text component rendering a quote character


export default function TestimonialCard({ quote, name, title, avatarSrc, avatarAlt }) {
    return (
        <div className="testimonial-card">

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