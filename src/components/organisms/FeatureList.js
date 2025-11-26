import React from 'react';
import FeatureBlock from '../molecules/FeatureBlock';


const featureData = [
    {
        iconName: 'document',
        title: 'The Best Companies',
        description: 'We work with the most reliable real estate companies in the country.',
    },
    {
        iconName: 'chart',
        title: 'Transparent Prices',
        description: 'Accurate and transparent information on every property with no hidden fees.',
    },
    {
        iconName: 'shield',
        title: 'Verified',
        description: 'All properties and companies are verified for your safety.',
    },
];

export default function FeatureList() {
    return (    
        <section className="feature-list-wrapper">
            <div className="feature-grid">
                {featureData.map((feature, index) => (
                    <FeatureBlock
                        key={index}
                        iconName={feature.iconName}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};