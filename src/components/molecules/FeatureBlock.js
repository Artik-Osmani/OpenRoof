import React from 'react';
import Icon from '../atoms/Icon';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import '../organisms/FeatureList.css';

export default function FeatureBlock({ iconName, title, description }) {
    return (
        <div className="feature-block-wrapper">
            <Icon name={iconName} />
            <Title title={title} className="feature-title" />
            <Text text={description} className="feature-description" />
        </div>
    );
};