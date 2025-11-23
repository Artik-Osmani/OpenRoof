import React from 'react';
import Text from '../atoms/Text';
import './RangeSlider.css'; // New CSS file

export default function RangeSlider({ title, min, max, value, onChange, unit }) {
    return (
        <div className="range-slider-container">
            <Text text={title} className="range-slider-title" />
            <Text text={value} className="range-slider-value" />
            <input
                type="range"
                min={min}
                max={max}
                value={value.split(' - ')[1].replace(unit, '').trim()} // simplified value extraction
                onChange={onChange}
                className="range-slider-input"
            />
        </div>
    );
}