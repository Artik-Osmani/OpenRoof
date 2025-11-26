import React from 'react'
import HomeBanner from "../organisms/HomeBanner";
import FeatureList from "../organisms/FeatureList";
import CityExplorer from '../organisms/CityExplorer';
import ServicesSection from '../organisms/ServicesSection';
import "./Home.css";

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <FeatureList />
            <CityExplorer />
            <ServicesSection />
        </main>
    );
}