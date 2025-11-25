import React from 'react';
import Title from '../atoms/Title';
import PropertyCard from '../molecules/PropertyCard';
import './PropertyListing.css';

// 1. IMPORT the images here. Webpack/Vite will process these and give them a valid URL.
// Use the exact relative path you provided.
import apartamentImage from '../../assets/house-11.jpg';
import agentImage from '../../assets/agent-1.jpg';


export default function PropertyListing() {
    // 2. Use the imported variables (apartamentImage, agentImage) instead of the string paths.
    const properties = [
        {
            id: 1,
            // Use the imported variable
            imageUrl: apartamentImage,
            address: '145 Brooklyn Ave, California, New York',
            name: 'Casa Lomas De Machali Machas',
            beds: 3,
            baths: 2,
            sqft: 1150,
            // Use the imported variable
            agentImage: agentImage,
            agentName: 'Arlene McCoy',
            price: '7250.00',
        },
        {
            id: 2,
            imageUrl: apartamentImage,
            address: '145 Brooklyn Ave, California, New York',
            name: 'Casa Lomas De Machali Machas',
            beds: 3,
            baths: 2,
            sqft: 1150,
            agentImage: agentImage,
            agentName: 'Arlene McCoy',
            price: '7250.00',
        },
        {
            id: 3,
            imageUrl: apartamentImage,
            address: '145 Brooklyn Ave, California, New York',
            name: 'Casa Lomas De Machali Machas',
            beds: 3,
            baths: 2,
            sqft: 1150,
            agentImage: agentImage,
            agentName: 'Arlene McCoy',
            price: '7250.00',
        },
        {
            id: 4,
            imageUrl: apartamentImage,
            address: '145 Brooklyn Ave, California, New York',
            name: 'Casa Lomas De Machali Machas',
            beds: 3,
            baths: 2,
            sqft: 1150,
            agentImage: agentImage,
            agentName: 'Arlene McCoy',
            price: '7250.00',
        },
        // Add more properties as needed
    ];

    return (
        <section className="property-listing-section">
            <div className="propertie-header">
                <Title title="Property Listing" className="property-title" />
            </div>
            <Title text="Property Listing" className="property-listing-main-title" />
            <div className="property-card-grid">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </section>
    );
}