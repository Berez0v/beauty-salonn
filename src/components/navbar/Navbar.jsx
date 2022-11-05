import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
export const Navbar = () => {
    return (
        <nav className='menu'>
            <Link to="/">
                <img src="/img/logo.png" className="logo" alt='clown' />
                <img src="/img/clown.png" alt='clown' />
            </Link>
                <div></div>
                <div></div>
            <div className='menu'>
            <Link to="/main">Main page</Link>
            <Link to="/orders/step/1">Order service</Link>
            <Link className="login" to="/login">Login</Link>
            </div>
        </nav>
    )
}