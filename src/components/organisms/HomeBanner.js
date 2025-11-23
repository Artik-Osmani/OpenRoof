import React from 'react'
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import SearchBar from "../molecules/SearchBar";
import "./HomeBanner.css";

export default function HomeBanner() {
    return (
        <div className="home-banner">
            <Title title="Gjeni Shtëpinë Tuaj të Ëndrrave" />
            <Text text="Platforma më e madhe e pasurive të paluajtshme në Kosovë. Mbi 1000+ prona nga kompanitë më të besueshme." />
            <SearchBar />
        </div>
    );
}
