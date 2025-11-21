import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import './PropertyCard.css';


const LocationIcon = () => (
    <svg className="location-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default function PropertyCardDetails({ title, location, description }) {
    return (
        <div className="property-card-details">
            <Title title={title} className="card-title" />
            <div className="card-location">
                <LocationIcon />
                <Text text={location} className="location-text" />
            </div>
            <Text text={description} className="card-description" />
        </div>
    );
}