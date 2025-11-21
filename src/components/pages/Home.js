import React from 'react'
import HomeBanner from "../organism/HomeBanner";
import FeatureList from "../organism/FeatureList";
import FeaturedPropertiesSection from "../organism/FeaturedPropertiesSection";
import "./Home.css";

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <FeatureList />
            <FeaturedPropertiesSection />
        </main>
    );
}