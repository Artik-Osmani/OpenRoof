import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import CityCard from '../molecules/CityCard';
import './CityExplorer.css';

// 1. IMPORT the new image path
import location2Image from '../../assets/location-2.jpg';


const cityData = [
    // All cards will now use location2Image
    { id: 1, cityName: 'Naperville', propertyCount: 321, imageUrl: location2Image },
    { id: 2, cityName: 'Pembroke Pines', propertyCount: 321, imageUrl: location2Image },
    { id: 3, cityName: 'Toledo', propertyCount: 321, imageUrl: location2Image },
    { id: 4, cityName: 'Orange', propertyCount: 321, imageUrl: location2Image },
    { id: 5, cityName: 'Fairfield', propertyCount: 321, imageUrl: location2Image },
];

export default function CityExplorer() {
    return (
        <section className="city-explorer-section">
            <div className="city-explorer-header">
                <Text text="EXPLORE CITIES" className="city-explorer-subtitle" />
                <Title text="Our Location For You" className="city-explorer-title" />

                {/* NEW SUBTEXT UNDER THE TITLE */}
                <Text
                    text="Find the perfect property across our top featured cities."
                    className="city-explorer-description"
                />
            </div>

            <div className="city-cards-grid">
                {cityData.map((city) => (
                    <CityCard key={city.id} city={city} />
                ))}
            </div>
        </section>
    );
}
