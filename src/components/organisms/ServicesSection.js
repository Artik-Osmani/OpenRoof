import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import ServiceCard from '../molecules/ServiceCard';
import './ServicesSection.css'; // Don't forget to create this CSS file

// 1. Import the house images here
import housePurpleImage from '../../assets/apartament.jpg';
import houseOrangeRoofImage from '../../assets/apartament.jpg';
import houseYellowImage from '../../assets/apartament.jpg';

// Sample data to populate the service cards
const servicesData = [
    {
        id: 1,
        imageUrl: housePurpleImage, // Use imported image
        title: 'Buy A New Home',
        description: 'Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.',
        buttonText: 'Learn More',
    },
    {
        id: 2,
        imageUrl: houseOrangeRoofImage, // Use imported image
        title: 'Sell A Home',
        description: 'Sell confidently with expert guidance and effective strategies, showcasing your property\'s best features for a successful sale.',
        buttonText: 'Learn More',
    },
    {
        id: 3,
        imageUrl: houseYellowImage, // Use imported image
        title: 'Rent A Home',
        description: 'Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.',
        buttonText: 'Learn More',
    },
];

export default function ServicesSection() {
    return (
        <section className="services-section">
            <div className="services-header">
                <Text text="OUR SERVICES" className="services-subtitle" />
                <Title text="What We Do?" className="services-title" />
            </div>

            <div className="services-grid">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}