import React from 'react';
import './Header.css';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';

function Header({ src, alt, homeUrl, aboutUrl, signInUrl }) {
    return (
        <div className="header">
            <Logo src={src} alt={alt} />
            <NavBar homeUrl={homeUrl} aboutUrl={aboutUrl} signInUrl={signInUrl} />
        </div>
    );
}

export default Header;
