// src/components/organisms/TeamSection.js (UPDATED with image imports)
import React from 'react';
import TeamCard from '../molecules/TeamCard';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import './TeamSection.css';

// Import the images
import image1 from '../../assets/agent-1.jpg';
import image2 from '../../assets/agent-1.jpg';
import image3 from '../../assets/agent-1.jpg';
import image4 from '../../assets/agent-1.jpg';
 
const teamMembers = [
    { name: 'Chris Patt', role: 'Staff Administrate', imageSrc: image1, imageAlt: 'Chris Patt - Administrative Staff' },
    { name: 'Esther Howard', role: 'Agjent Kryesor', imageSrc: image2, imageAlt: 'Esther Howard - Main Agent' },
    { name: 'Darrell Steward', role: 'Specialist i Pronave', imageSrc: image3, imageAlt: 'Darrell Steward - Property Specialist' },
    { name: 'Robert Fox', role: 'Konsulent Ligjor', imageSrc: image4, imageAlt: 'Robert Fox - Legal Consultant' },
];

export default function TeamSection() {
    return (
        <section className="team-section-wrapper">
            <div className="team-section-header">
                <Text text="EKIPET TONA" className="team-subtitle" />
                <Title title="Njihuni Me Agjentët Tanë" className="team-title" />
            </div>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        imageSrc={member.imageSrc}
                        imageAlt={member.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}