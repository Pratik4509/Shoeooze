import React from 'react';
import './Header.css';


const Header = () => ( 
    <>
        <header className="App-header animate__animated animate__fadeInDown">
            <h3><a href="/">Shoeooze</a></h3>
            <div className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </div>
            <div className="login">
            <li><a href="/login">Login / Resigter</a></li>
            </div>
        </header>
    </>
);

export default Header;