import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ isLoggedIn, onLoginSuccess }) {
    return (
        <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/LoginPage'>LogIn</Link>
            {isLoggedIn ? (
                <Link to='/dashboard'>Dashboard</Link>
            ) : (
                <Link to='/signin'>SignIn</Link>
            )}
        </div>
    )
}
