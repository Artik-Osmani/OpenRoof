import React from 'react';
import Image from '../atoms/Image'; // Assuming you have an Image atom
import Title from '../atoms/Title'; // Assuming you have a Title atom
import Text from '../atoms/Text';   // Assuming you have a Text atom
import Button from '../atoms/Button'; // Assuming you have a Button atom
import './ServiceCard.css'; // Don't forget to create this CSS file

export default function ServiceCard({ service }) {
    const { imageUrl, title, description, buttonText } = service;

    return (
        <div className="service-card">
            <div className="service-card-image-wrapper">
                <Image src={imageUrl} alt={title} className="service-card-image" />
            </div>
            <Title text={title} className="service-card-title" />
            <Text text={description} className="service-card-description" />
            <Button text={buttonText} className="service-card-button" />
        </div>
    );
}