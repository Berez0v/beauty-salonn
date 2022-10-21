import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
export const Navbar = () => {
    return (
        <nav className='menu'>
            <Link to="/"><img className='logo' src="src/assets/clown.png" alt='clown' /><h2>PowerBeauty</h2><h3>Beauty is our duty</h3></Link>
            <Link to="/MainPage">Main page</Link>
            <Link to="/OrderServicePage">Order service page</Link>
            <Link to="/LoginPage">Login</Link>
        </nav>
    )
}