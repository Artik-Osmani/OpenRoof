import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the User Context
const UserContext = createContext();

// Custom hook to use User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// User Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    password: 'hashed_password', // In real app, never store plain passwords
  });

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Beautiful Modern House',
      address: '456 Oak Avenue, Suburbs',
      description: 'Stunning 4-bedroom house with modern amenities',
      price: 450000,
      image: null,
    },
    {
      id: 2,
      title: 'Cozy Apartment',
      address: '789 Pine Street, Downtown',
      description: 'Charming 2-bedroom apartment in the heart of the city',
      price: 280000,
      image: null,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      senderName: 'Property Agents Co.',
      subject: 'Your listing is featured',
      content: 'Your property listing "Beautiful Modern House" has been featured on our homepage! Click here to view it.',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      read: true,
    },
    {
      id: 2,
      senderName: 'Real Estate Group',
      subject: 'Interested in your property',
      content: 'We are very interested in showing your property to our clients. Please contact us for more details about scheduling a viewing.',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      read: false,
    },
  ]);

  // Update user profile
  const updateUser = (updatedUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUserData,
    }));
    // Here you would typically make an API call to persist changes
    console.log('User updated:', updatedUserData);
  };

  // Add to favorites
  const addToFavorites = (listing) => {
    if (!favorites.find((fav) => fav.id === listing.id)) {
      setFavorites((prev) => [...prev, listing]);
      console.log('Added to favorites:', listing);
    }
  };

  // Remove from favorites
  const removeFromFavorites = (listingId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== listingId));
    console.log('Removed from favorites:', listingId);
  };

  // Add message
  const addMessage = (message) => {
    setMessages((prev) => [
      {
        id: prev.length + 1,
        ...message,
        date: new Date().toISOString(),
        read: false,
      },
      ...prev,
    ]);
  };

  // Delete message
  const deleteMessage = (messageId) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    console.log('Message deleted:', messageId);
  };

  // Mark message as read
  const markMessageAsRead = (messageId) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  // Logout function
  const logout = () => {
    // Clear user data and redirect
    console.log('User logged out');
    // In a real app, you would clear auth tokens and redirect
  };

  const value = {
    user,
    updateUser,
    favorites,
    addToFavorites,
    removeFromFavorites,
    messages,
    addMessage,
    deleteMessage,
    markMessageAsRead,
    logout,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserContext;
