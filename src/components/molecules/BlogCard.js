// src/components/molecules/BlogCard.js
import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Title from '../atoms/Title'; // Reusing Title for the article heading
import './BlogCard.css'; // New CSS file

export default function BlogCard({ date, category, author, title, imageSrc, imageAlt }) {
    return (
        <div className="blog-card">
            <div className="blog-image-wrapper">
                <Image src={imageSrc} alt={imageAlt} className="blog-article-image" />
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    <Text text={date} className="blog-date" />
                    <Text text={`| ${category}`} className="blog-category" />
                </div>
                <Title title={title} className="blog-title" />
                {/* Optional: You can add an excerpt here if you like */}
                <div className="blog-author">
                    <Text text={author} className="author-name" />
                </div>
            </div>
        </div>
    );
}