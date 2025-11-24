// src/components/pages/About.js (UPDATED)
import React from 'react';
import AboutHero from '../organisms/AboutHero';
import TeamSection from '../organisms/TeamSection';
import TestimonialsSection from "../organisms/TestimonialsSection";
import FaqSection from '../organisms/FaqSection';
import Partner from '../organisms/Partner';


export default function About() {
    const aboutTitle = "Misioni Dhe Vizioni Ynë";
    const aboutDescription = "Në OpenRoof, ne besojmë se gjetja e shtëpisë së ëndrrave duhet të jetë një përvojë e thjeshtë dhe e besueshme. Misioni ynë është të lidhim blerësit dhe shitësit me ekspertët më të mirë të pasurive të paluajtshme, duke siguruar transparencë dhe siguri në çdo hap.";

    return (
        <main>
            <AboutHero title={aboutTitle} description={aboutDescription} />
            <TeamSection />
            <TestimonialsSection />
            <Partner />
            <FaqSection />
        </main>
    );
}