import React, { useState } from 'react';
import ProfileForm from '../molecules/ProfileForm';
import './ProfileSection.css';

const ProfileSection = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedUser) => {
    onUpdate(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-section">
      {!isEditing ? (
        <div className="profile-view">
          <h2>My Profile</h2>
          <div className="profile-info">
            <div className="profile-info__item">
              <label>Full Name</label>
              <p>{user.fullName}</p>
            </div>
            <div className="profile-info__item">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <div className="profile-info__item">
              <label>Phone Number</label>
              <p>{user.phone}</p>
            </div>
            <div className="profile-info__item">
              <label>Address</label>
              <p>{user.address}</p>
            </div>
          </div>
          <button
            className="profile-view__edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <ProfileForm
          user={user}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ProfileSection;
