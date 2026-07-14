import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

import toast from 'react-hot-toast';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('luxeestates_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('luxeestates_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => {
      if (prev.includes(propertyId)) {
        toast('Removed from favorites', { icon: '💔' });
        return prev.filter(id => id !== propertyId);
      } else {
        toast.success('Added to favorites');
        return [...prev, propertyId];
      }
    });
  };

  const isFavorite = (propertyId) => favorites.includes(propertyId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
