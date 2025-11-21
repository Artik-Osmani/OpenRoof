
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import './PropertyCard.css';

export default function PropertyCardFooter({ price, detailButtonText = 'Shiko Detajet' }) {
    return (
        <div className="property-card-footer">
            <div className="price-and-details">
                <Text text={price} className="price-text" />
                <Button text={detailButtonText} className="detail-button" />
            </div>
        </div>
    );
}