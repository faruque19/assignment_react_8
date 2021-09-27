import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                {/* this header menu */}
                <nav className="nav">
                    <a href="/home"><span className="home">Home</span></a>
                    <a href="/product">Product</a>
                    <a href="/services">Services</a>
                    <a href="/countact us">Countact Us</a>
                </nav>
            </div>
            <div className="welcome">
                <h2>Welcome To Our Restaurant</h2>
                <h3>Total Budget For 2 Person 1500tk</h3>
            </div>
        </div>
    );
};

export default Header;