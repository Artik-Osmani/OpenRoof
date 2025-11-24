import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = ({ listing, onRemove }) => {
  return (
    <div className="favorite-card">
      <div className="favorite-card__image">
        {listing.image ? (
          <img src={listing.image} alt={listing.title} />
        ) : (
          <div className="favorite-card__no-image">No Image</div>
        )}
      </div>
      <div className="favorite-card__content">
        <h3>{listing.title}</h3>
        <p className="favorite-card__address">{listing.address}</p>
        <p className="favorite-card__description">{listing.description}</p>
        <div className="favorite-card__footer">
          <span className="favorite-card__price">${listing.price}</span>
          <button
            className="favorite-card__remove-btn"
            onClick={() => onRemove(listing.id)}
            title="Remove from favorites"
          >
            ✕ Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
