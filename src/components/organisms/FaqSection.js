// src/components/organisms/FaqSection.js (UPDATED - English Content)
import React from 'react';
import AccordionItem from '../molecules/AccordionItem';
import Title from '../atoms/Title';
import './FaqSection.css';

const faqData = [
    {
        question: "What are your services?",
        answer: "We offer complete property listing services, professional management, and legal consultation for both buyers and sellers across Kosovo.",
    },
    {
        question: "How do I get started with your services?",
        answer: "Once you've completed your registration and familiarized yourself with the platform, you're ready to start using our services. Whether it's accessing specific features or making transactions, you'll find everything you need at your fingertips.",
    },
    {
        question: "Is customer support available?",
        answer: "Yes, our dedicated customer support team is available 24/7 via phone and email to assist you with any questions or issues you may encounter.",
    },
    {
        question: "How can I change my account information?",
        answer: "You can update all of your account details, including contact information and preferences, by navigating to the 'Profile' section after logging into your user dashboard.",
    },
];

export default function FaqSection() {
    return (
        <section className="faq-section-wrapper">
            <div className="faq-header">
                <Title title="FAQs" className="faq-title" />
            </div>

            <div className="accordion-container">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
};