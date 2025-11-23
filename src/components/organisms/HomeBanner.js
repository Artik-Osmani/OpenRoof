import React, { useState } from 'react';
import Title from "../atoms/Title"; // Assumed existing
import Text from "../atoms/Text"; // Assumed existing
import Button from "../atoms/Button"; // Assumed existing
import Image from "../atoms/Image"; // Assumed existing
import "./HomeBanner.css";
// NOTE: Please ensure this path points to your background image file
import homeBannerBg from '../../assets/apartament.jpg';

// --- INTERNAL ATOMS & MOLECULES (To make this component self-contained and runnable) ---
const SearchIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const RangeSlider = ({ title, value, unit, min, max, onChange }) => (
    <div className="range-slider-container">
        <Text text={title} className="range-slider-title" />
        <Text text={value} className="range-slider-value" />
        <input
            type="range"
            min={min}
            max={max}
            // Dynamic track color requires setting a CSS variable (handled in HomeBanner.css)
            style={{ '--value': `${((parseInt(value.split(' - ')[1].replace(/[^0-9]/g, '')) - min) / (max - min)) * 100}%` }}
            value={parseInt(value.split(' - ')[1].replace(/[^0-9]/g, ''))}
            onChange={onChange}
            className="range-slider-input"
        />
    </div>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
    <label className="checkbox-field-label">
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="checkbox-field-input"
        />
        {label}
    </label>
);

// --- ADVANCED FILTERS ORGANISM ---
const amenities = [
    'Air Condition', 'Elevator', 'Floor', 'Heating', 'Intercom', 'Security',
    'Cable TV', 'Fence', 'Furnishing', 'Renovation', 'Swimming Pool', 'Construction year',
    'Ceiling Height', 'Garage', 'Parking', 'Window type', 'Search property',
];

const AdvancedFilters = ({ isVisible }) => {
    // Dummy state for sliders/dropdowns
    const [priceRange, setPriceRange] = useState('$100 - $650,000');
    const [sizeRange, setSizeRange] = useState('500 SqFt - 1,500 SqFt');

    if (!isVisible) return null;

    return (
        <div className="advanced-filters-section">
            <div className="filters-grid">
                {/* 1. Price Range Slider */}
                <RangeSlider
                    title="Price Range"
                    min={100} max={1000000}
                    value={priceRange}
                    onChange={(e) => setPriceRange(`$100 - $${parseInt(e.target.value).toLocaleString()}`)}
                    unit="$"
                />

                {/* 2. Size Range Slider */}
                <RangeSlider
                    title="Size"
                    min={100} max={3000}
                    value={sizeRange}
                    onChange={(e) => setSizeRange(`500 SqFt - ${e.target.value} SqFt`)}
                    unit=" SqFt"
                />

                {/* 3. Bathrooms Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <Text text="Bathrooms" className="filter-dropdown-label" />
                    <select className="filter-dropdown" defaultValue="2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                    </select>
                </div>

                {/* 4. Bedrooms Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <Text text="Bedrooms" className="filter-dropdown-label" />
                    <select className="filter-dropdown" defaultValue="2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                    </select>
                </div>

                {/* 5. Type Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <Text text="Type" className="filter-dropdown-label" />
                    <select className="filter-dropdown" defaultValue="Apartment">
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Office</option>
                    </select>
                </div>
            </div>

            {/* Amenities Checkboxes */}
            <Title title="Amenities" className="amenities-title" />
            <div className="amenities-grid">
                {amenities.map(amenity => (
                    <CheckboxField
                        key={amenity}
                        label={amenity}
                        name={amenity}
                        checked={false}
                        onChange={() => { }}
                    />
                ))}
            </div>

            <Text text="Recommended For You" className="recommended-text" />
        </div>
    );
}


// --- SEARCH FORM INPUT MOLECULE ---
const SearchFormInput = ({ isAdvancedSearchVisible, toggleAdvancedSearch }) => {
    return (
        <div className="search-form-input">
            {/* Type Dropdown (Simulated) */}
            <div className="search-form-dropdown">
                <Text text="Type" className="dropdown-label" />
                <div className="dropdown-value-wrapper">
                    <Text text="All" className="dropdown-text" />
                    {/* Down Arrow SVG */}
                    <svg className="dropdown-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

            {/* Location Input */}
            <div className="search-form-location">
                <Text text="Location" className="dropdown-label" />
                <div className="input-wrapper">
                    <input placeholder="Search Location" className="search-input" />
                    {/* Compass Icon SVG */}
                    <svg className="location-icon-compass" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v-2m0 0V10m0 2h2m-2 0H10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
            </div>

            {/* Keyword Input */}
            <div className="search-form-keyword">
                <Text text="Keyword" className="dropdown-label" />
                <input placeholder="Search Keyword." className="search-input" />
            </div>

            {/* Advanced Search Link - Now a button/clickable element */}
            <button className={`search-advanced-link ${isAdvancedSearchVisible ? 'link-active' : ''}`} onClick={toggleAdvancedSearch}>
                <Text text="Search advanced" className="search-advanced-text" />
                <div className="search-advanced-icon">
                    {/* Up/Down Arrow SVG Here */}
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </button>
        </div>
    );
}

// --- MAIN HOME BANNER ORGANISM ---
export default function HomeBanner() {
    const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);
    const [activeSegment, setActiveSegment] = useState('Rent');

    const toggleAdvancedSearch = () => {
        setIsAdvancedSearchVisible(prev => !prev);
    };

    return (
        <div className="home-banner-wrapper">
            <Image
                src={homeBannerBg}
                alt="Modern luxury house"
                className="home-banner-background-image"
            />
            <div className="home-banner-overlay">
                <Title title="Find Your Dream Home" className="home-banner-title" />
                <Text
                    text="We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?"
                    className="home-banner-text"
                />

                {/* Rent/Sale Segmented Buttons */}
                <div className="rent-sale-buttons">
                    <Button
                        text="For Rent"
                        className={`segment-button ${activeSegment === 'Rent' ? 'segment-button-active' : ''}`}
                        onClick={() => setActiveSegment('Rent')}
                    />
                    <Button
                        text="For Sale"
                        className={`segment-button ${activeSegment === 'Sale' ? 'segment-button-active' : ''}`}
                        onClick={() => setActiveSegment('Sale')}
                    />
                </div>

                {/* Main Search Form Container (Holds both the bar and the filters) */}
                <div className={`main-search-form-container ${isAdvancedSearchVisible ? 'expanded' : ''}`}>
                    <div className="main-search-form">
                        <SearchFormInput
                            isAdvancedSearchVisible={isAdvancedSearchVisible}
                            toggleAdvancedSearch={toggleAdvancedSearch}
                        />
                        <button className="search-final-button">
                            <SearchIcon />
                            <span className="search-final-button-text">Search</span>
                        </button>
                    </div>

                    <AdvancedFilters
                        isVisible={isAdvancedSearchVisible}
                    />
                </div>
            </div>
        </div>
    );
}