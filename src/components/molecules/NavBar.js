import React from 'react'
import { Link } from 'react-router-dom'
import '../organisms/Header.css'

export default function NavBar({ isLoggedIn, onLoginSuccess }) {
    return (
        <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/properties'>Properties</Link>
            <Link to='/userdashboard'>User Dashboard</Link>
            <div className='buttonLogIn'>
                <i class="fa-regular fa-user"></i>
                <Link to='/login'>Log In</Link>
            </div>

        </div>
    )
}
