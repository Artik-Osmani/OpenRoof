import React from 'react';
import './CheckboxField.css'; // New CSS file

export default function CheckboxField({ label, name, checked, onChange }) {
    return (
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
}