import React from 'react';
import FeatureBlock from '../molecules/FeatureBlock';


const featureData = [
    {
        iconName: 'document',
        title: 'Kompanitë më të Mira',
        description: 'Bashkëpunojmë me kompanitë më të besueshme të pasurive të paluajtshme në vend.',
    },
    {
        iconName: 'chart',
        title: 'Çmime Transparente',
        description: 'Informacion i saktë dhe transparent për çdo pronë pa tarifa të fshehura.',
    },
    {
        iconName: 'shield',
        title: 'Të Verifikuara',
        description: 'Të gjitha pronat dhe kompanitë janë të verifikuara për sigurinë tuaj.',
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