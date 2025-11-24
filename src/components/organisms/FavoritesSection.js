import React from 'react';
import FavoriteCard from '../molecules/FavoriteCard';
import './FavoritesSection.css';

const FavoritesSection = ({ favorites, onRemove }) => {
  return (
    <div className="favorites-section">
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <div className="favorites-section__empty">
          <p>No favorites yet. Start adding listings to see them here!</p>
        </div>
      ) : (
        <div className="favorites-section__grid">
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              listing={favorite}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesSection;
