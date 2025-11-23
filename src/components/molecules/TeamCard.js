// src/components/molecules/TeamCard.js
import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import './TeamCard.css'; // New CSS file

export default function TeamCard({ name, role, imageSrc, imageAlt }) {
    return (
        <div className="team-card">
            <div className="card-image-wrapper">
                <Image src={imageSrc} alt={imageAlt} className="team-member-image" />
            </div>
            <Text text={name} className="agent-name" />
            <Text text={role} className="agent-role" />
        </div>
    );
}