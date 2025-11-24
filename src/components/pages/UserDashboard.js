import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import TabNavigation from '../atoms/TabNavigation';
import ProfileSection from '../organisms/ProfileSection';
import FavoritesSection from '../organisms/FavoritesSection';
import MessagesSection from '../organisms/MessagesSection';
import ProfileButton from '../atoms/ProfileButton';
import './UserDashboard.css';

const UserDashboard = ({ onLogout }) => {
  const { user, updateUser, favorites, removeFromFavorites, messages, deleteMessage } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'favorites', label: 'My Favorites', icon: '❤️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
  ];

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  return (
    <div className="user-dashboard">
      <header className="user-dashboard__header">
        <div className="user-dashboard__header-content">
          <h1>Welcome, {user.fullName}! 👋</h1>
          <ProfileButton
            label="Logout"
            onClick={handleLogout}
            variant="danger"
          />
        </div>
      </header>

      <div className="user-dashboard__container">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="user-dashboard__content">
          {activeTab === 'profile' && (
            <ProfileSection user={user} onUpdate={updateUser} />
          )}

          {activeTab === 'favorites' && (
            <FavoritesSection favorites={favorites} onRemove={removeFromFavorites} />
          )}

          {activeTab === 'messages' && (
            <MessagesSection messages={messages} onDeleteMessage={deleteMessage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
