import React from 'react';
import Text from '../atoms/Text';
import './PropertyCard.css';


const icons = {
    bed: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V11M2 17h20M2 17V5h10V17M12 17V5h10V17M17 10h1M7 10h1" /></svg>
    ),
    bath: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M5 10H3a2 2 0 0 1 0-4h20a2 2 0 0 1 0 4h-2M15 15v6M9 15v6M5 10h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10z" /></svg>
    ),
    area: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="6"></line></svg>
    ),

};

export default function PropertyMetaItem({ type, value, unit = '' }) {
    const IconComponent = icons[type] || null;

    if (!IconComponent) return null;

    return (
        <div className="property-meta-item">
            <IconComponent className="meta-icon" />
            <Text text={`${value}${unit}`} className="meta-text" />
        </div>
    );
}