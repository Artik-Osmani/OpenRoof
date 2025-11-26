import React from 'react';
import Text from '../atoms/Text';
import './CityCard.css'; // Create this CSS file

export default function CityCard({ city }) {
    const { imageUrl, propertyCount, cityName } = city;

    return (
        <div className="city-card">
            {/* Use inline style for background image for simplicity */}
            <div
                className="city-card-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="city-card-overlay">
                    <Text text={`${propertyCount} Property`} className="city-card-count" />
                    <Text text={cityName} className="city-card-name" />
                </div>
            </div>
        </div>
    );
}