import React from 'react';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import './PropertyCard.css'; // Don't forget to create this CSS file

export default function PropertyCard({ property }) {
    const { imageUrl, address, name, beds, baths, sqft, agentImage, agentName, price } = property;

    return (
        <div className="property-card">
            <div className="property-card-image-wrapper">
                <Image src={imageUrl} alt={name} className="property-card-image" />
                <span className="property-card-badge">For Sale</span>
                <Text text={address} className="property-card-address" />
            </div>
            <div className="property-card-content">
                <Title text={name} className="property-card-name" />
                <Text text={`Beds: ${beds}  Baths: ${baths}  Sqft: ${sqft}`} className="property-card-details" />
                <div className="property-card-footer">
                    <div className="property-card-agent">
                        <Image src={agentImage} alt={agentName} className="property-card-agent-image" />
                        <Text text={agentName} className="property-card-agent-name" />
                    </div>
                    <Text text={`$${price}`} className="property-card-price" />
                </div>
            </div>
        </div>
    );
}