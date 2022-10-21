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
            <Link to="/MainPage">Main page</Link>
            <Link to="/OrderServicePage">Order service</Link>
            <Link className="login" to="/LoginPage">Login</Link>
            </div>
        </nav>
    )
}