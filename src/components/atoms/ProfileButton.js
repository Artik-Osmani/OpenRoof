import React from 'react';
import './ProfileButton.css';

const ProfileButton = ({ label, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button className={`profile-button profile-button--${variant}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default ProfileButton;
