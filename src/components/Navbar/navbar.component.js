import React from 'react';
import "./navbar.styles.scss";
import SearchBar from '../search/search-bar.component';


const Navbar = () => {
    const imgSrc = "/images/logo_g2a_white.svg";
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={imgSrc} alt="logo" />
                    <p style={{color: "red", fontWeight: 900}}>Group 2</p>
                </div>
                <div>
                    <ul className="navbar-links">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                    <SearchBar type="text" placeholder="search" hello="search" />
            </div>
        </nav>
    )
}

export default Navbar;
