import React from 'react';
import Input from "../atoms/Input";
import Text from "../atoms/Text"; // Assuming Text is used for the 'Search advanced' link
import './SearchFormInput.css'; // You'll need to create this CSS file

export default function SearchFormInput() {
    return (
        <div className="search-form-input">
            {/* Type Dropdown (Simulated as a simple div/text for simplicity) */}
            <div className="search-form-dropdown">
                <Text text="All" className="dropdown-text" />
                {/* Arrow icon would go here */}
            </div>

            {/* Location Input */}
            <div className="search-form-location">
                <Input placeholder="Search Location" />
                {/* Location icon would go here */}
            </div>

            {/* Keyword Input */}
            <Input placeholder="Search Keyword..." className="search-form-keyword-input" />

            {/* Advanced Search Link */}
            <div className="search-advanced-link">
                <Text text="Search advanced" className="search-advanced-text" />
            </div>
        </div>
    );
}