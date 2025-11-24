// src/components/molecules/AccordionItem.js
import React, { useState } from 'react';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import './AccordionItem.css'; // New CSS file

// Chevron Icon for toggling
const ChevronIcon = ({ isOpen }) => (
    <svg
        className={`chevron-icon ${isOpen ? 'open' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export default function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={toggleOpen}>
                <Title title={question} className="accordion-question" />
                <ChevronIcon isOpen={isOpen} />
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <Text text={answer} className="accordion-answer" />
                </div>
            )}
            <div className="accordion-divider"></div>
        </div>
    );
};