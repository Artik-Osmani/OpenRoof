import React from 'react'
import HomeBanner from "../organisms/HomeBanner";
import FeatureList from "../organisms/FeatureList";
import "./Home.css";

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <FeatureList />
        </main>
    );
}