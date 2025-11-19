import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';

function Header({ src, alt, homeUrl, aboutUrl }) {
    return (
        <div className="header">
            <Logo src={src} alt={alt} />
            <NavBar homeUrl={homeUrl} aboutUrl={aboutUrl} />
        </div>
    );
}

export default Header;
