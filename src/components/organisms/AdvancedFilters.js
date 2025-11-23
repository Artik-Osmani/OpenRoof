import React from 'react';
import RangeSlider from '../molecules/RangeSlider';
import CheckboxField from '../molecules/CheckboxField';
import Title from '../atoms/Title';
import './AdvancedFilters.css'; // New CSS file

// Dummy Data for demonstration
const amenities = [
    'Air Condition', 'Elevator', 'Floor', 'Heating', 'Intercom', 'Security',
    'Cable TV', 'Fence', 'Furnishing', 'Renovation', 'Swimming Pool', 'Construction year',
    'Ceiling Height', 'Garage', 'Parking', 'Window type', 'Search property',
];

export default function AdvancedFilters({ isVisible, toggleAdvancedSearch }) {
    // Dummy state for sliders/dropdowns
    const [priceRange, setPriceRange] = React.useState('$100 - $650,000');
    const [sizeRange, setSizeRange] = React.useState('500 SqFt - 1,500 SqFt');

    if (!isVisible) return null;

    return (
        <div className="advanced-filters-section">
            <div className="filters-grid">
                {/* 1. Price Range Slider */}
                <RangeSlider
                    title="Price Range"
                    min="100"
                    max="1000000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(`$100 - $${e.target.value}`)}
                    unit="$"
                />

                {/* 2. Size Range Slider */}
                <RangeSlider
                    title="Size"
                    min="100"
                    max="3000"
                    value={sizeRange}
                    onChange={(e) => setSizeRange(`${e.target.value} SqFt - 3,000 SqFt`)}
                    unit=" SqFt"
                />

                {/* 3. Bathrooms Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <p className="filter-dropdown-label">Bathrooms</p>
                    <select className="filter-dropdown">
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                {/* 4. Bedrooms Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <p className="filter-dropdown-label">Bedrooms</p>
                    <select className="filter-dropdown">
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                {/* 5. Type Dropdown (Simulated) */}
                <div className="filter-dropdown-group">
                    <p className="filter-dropdown-label">Type</p>
                    <select className="filter-dropdown">
                        <option>2</option>
                        <option>3</option>
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
                        // Dummy props for demonstration
                        checked={false}
                        onChange={() => { }}
                    />
                ))}
            </div>

            <p className="recommended-text">Recommended For You</p>
        </div>
    );
}
