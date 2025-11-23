import React from 'react';
import '../organisms/FeatureList.css';



const DocumentIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ChartIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const ShieldIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 005 12c0 3.038 1.498 5.842 3.844 7.641L12 22l3.75-2.812A12.008 12.008 0 0019 12c0-3.038-1.498-5.842-3.844-7.641L12 2z" />
    </svg>
);

const icons = {
    document: DocumentIcon,
    chart: ChartIcon,
    shield: ShieldIcon,
};

export default function Icon({ name }) {
    const IconComponent = icons[name] || null;

    if (!IconComponent) return null;

    return (
        <div className="icon-wrapper">
            <IconComponent />
        </div>
    );
};