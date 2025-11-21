// ... imports for Image only ...
import Image from '../atoms/Image';
import './PropertyCard.css';

export default function PropertyCardHeader({ imageSrc, imageAlt }) {
    return (
        <div className="property-card-header">
            <Image src={imageSrc} alt={imageAlt} className="property-image" />
        </div>
    );
}