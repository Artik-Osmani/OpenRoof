import React from 'react'
import { Link } from 'react-router-dom'
import '../organisms/Header.css'

export default function NavBar() {
    return (
        <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Properties'>Properties</Link>
            <div className='buttonLogIn'>
                <i class="fa-regular fa-user"></i>
                <Link to='/LogIn'>Log In</Link>
            </div>
        </div>
    )
}
