import React from 'react';
import './Header.css';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';

function Header({ src, alt, homeUrl, isLoggedIn, onLoginSuccess }) {
    return (
        <div className="header">
            <Logo src={src} alt={alt} />
            <NavBar isLoggedIn={isLoggedIn} onLoginSuccess={onLoginSuccess} />
        </div>
    );
}

export default Header;
