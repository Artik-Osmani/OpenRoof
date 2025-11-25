// src/components/organisms/BlogSection.js
import React from 'react';
import BlogCard from '../molecules/BlogCard';
import Title from '../atoms/Title';
import './BlogSection.css'; // New CSS file

// Placeholder image imports (You'll need to create these assets)
// These paths need to be updated to your actual image locations
import articleImage1 from '../../assets/apartament.jpg';
import articleImage2 from '../../assets/apartament.jpg';
import articleImage3 from '../../assets/apartament.jpg';
import articleImage4 from '../../assets/apartament.jpg';
import articleImage5 from '../../assets/apartament.jpg';
import articleImage6 from '../../assets/apartament.jpg';


const blogData = [
    { date: 'January 24, 2024', category: 'Architecture', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans', imageSrc: articleImage1, imageAlt: 'Modern house architecture' },
    { date: 'January 31, 2024', category: 'Interior', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans', imageSrc: articleImage2, imageAlt: 'Modern living room interior' },
    { date: 'January 28, 2024', category: 'Architecture', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans', imageSrc: articleImage3, imageAlt: 'Contemporary dark house exterior' },
    { date: 'February 06, 2024', category: 'Realtor', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans.', imageSrc: articleImage5, imageAlt: 'Glass box modern house exterior' },
    { date: 'February 09, 2024', category: 'Home Buying', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans', imageSrc: articleImage6, imageAlt: 'Minimalist interior with yellow chair' },
    { date: 'February 04, 2024', category: 'City Guide', author: 'Artik Osmani', title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans', imageSrc: articleImage4, imageAlt: 'City skyline at sunset' },

];

export default function BlogSection() {
    return (
        <section className="blog-section-wrapper">
            <div className="blog-header">
                <Title title="Latest News" className="blog-section-title" />
            </div>

            <div className="blog-grid">
                {blogData.map((article, index) => (
                    <BlogCard
                        key={index}
                        date={article.date}
                        category={article.category}
                        author={article.author}
                        title={article.title}
                        imageSrc={article.imageSrc}
                        imageAlt={article.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}