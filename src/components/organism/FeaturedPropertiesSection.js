import React from 'react';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import PropertyCard from '../molecules/PropertyCard';
import './FeaturedPropertiesSection.css';
import Image1 from '../../assets/apartament.jpg';
import Image2 from '../../assets/apartament.jpg';
import Image3 from '../../assets/apartament.jpg';


const featuredPropertiesData = [
    {
        title: 'Apartament Modern në Qendër të Prishtinës',
        location: 'Qendra e Prishtinës, Prishtinë',
        description: 'Apartament luksoz me 3 dhoma gjumi, ballkon të gjerë dhe pamje të mrekullueshme të qytetit. I ri dhe i mobiluar.',
        price: '€145,000',
        meta: { rooms: 3, baths: 2, area: 120, areaUnit: 'm²' },
        imageSrc: Image1,
        imageAlt: 'Apartament Modern',
        tags: [{ text: 'Për Shtëpi', type: 'house' }, { text: 'Apartament', type: 'apartment' }],
    },
    {
        title: 'Shtëpi Luksoze në Arbëri',
        location: 'Arbëria, Prishtinë',
        description: 'Shtëpi e re me 5 dhoma gjumi, oborr i madh, garazh për 2 vetura. Ndërtim i ri me materiale të cilësisë së lartë.',
        price: '€320,000',
        meta: { rooms: 5, baths: 3, area: 280, areaUnit: 'm²' },
        imageSrc: Image2,
        imageAlt: 'Shtëpi Luksoze',
        tags: [{ text: 'Për Shtëpi', type: 'house' }, { text: 'Shtëpi', type: 'house' }],
    },
    {
        title: 'Apartament 2+1 në Lagjen e Re',
        location: 'Lagjja e Re, Prishtinë',
        description: 'Apartament i ri i pa banuar me 2 dhoma gjumi, ballkon, nën ndërtesë të re me ashensor dhe parking.',
        price: '€85,000',
        meta: { rooms: 2, baths: 1, area: 75, areaUnit: 'm²' },
        imageSrc: Image3,
        imageAlt: 'Apartament 2+1',
        tags: [{ text: 'Për Shtëpi', type: 'house' }, { text: 'Apartament', type: 'apartment' }],
    },
];

export default function FeaturedPropertiesSection() {
    return (
        <section className="featured-properties-section">
            <div className="section-header-container">
                <Title title="Pronat e Zgjedhura" className="section-title" />
                <a href="/properties" className="view-all-link">
                    Shiko të Gjitha
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
            <div className="property-cards-grid">
                {featuredPropertiesData.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </section>
    );
}