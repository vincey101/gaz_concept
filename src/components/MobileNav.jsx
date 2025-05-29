import { useState } from 'react';

function MobileNav({ isOpen, onClose }) {
    return (
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="mobile-nav-items">
                <a href="#home" onClick={onClose}>Home</a>
                <a href="#services" onClick={onClose}>Services</a>
                <a href="#tour" onClick={onClose}>Tour</a>
                <a href="#about" onClick={onClose}>About Us</a>
                <a href="#contact" onClick={onClose}>Contact</a>
                <button className="sign-up-btn">Sign Up</button>
                <button className="sign-in-btn">Sign In</button>
            </div>
        </div>
    );
}

export default MobileNav; 