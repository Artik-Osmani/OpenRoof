import React, { useState } from 'react';
import './Header.css';
import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';
import Button from '../atoms/Button';

function Header({ src, alt, homeUrl, aboutUrl, blogUrl, propertiesUrl ,logInUrl }) {

    return (
        <div className="header">
            <Logo src={src} alt={alt} />
            <NavBar homeUrl={homeUrl} aboutUrl={aboutUrl} blogUrl={blogUrl} propertiesUrl={propertiesUrl} logInUrl={logInUrl} />
        </div>
    );
}

export default Header;
