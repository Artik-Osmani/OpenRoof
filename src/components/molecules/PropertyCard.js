import React from 'react';
import PropertyCardHeader from './PropertyCardHeader';
import PropertyCardDetails from './PropertyCardDetails';
import PropertyCardFooter from './PropertyCardFooter';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
    const { title, location, description, price, imageSrc, imageAlt } = property;

    return (
        <div className="property-card">
            <PropertyCardHeader imageSrc={imageSrc} imageAlt={imageAlt} />
            <div className="property-card-content">
                <PropertyCardDetails title={title} location={location} description={description} />
                <PropertyCardFooter price={price} />
            </div>
        </div>
    );
}