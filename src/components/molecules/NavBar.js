import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navBar'>
            <Link to='/'>Ballina</Link>
            <Link to='/rrethnesh'>Rreth Nesh</Link>
        </div>
    )
}
