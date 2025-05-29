import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'
import MobileNav from './MobileNav';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>

                {isMobile ? (
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        ☰
                    </button>
                ) : (
                    <div className="nav-items">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#tour">Tour</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <button className="sign-up-btn">Sign Up</button>
                        <button className="sign-in-btn">Sign In</button>
                    </div>
                )}
            </nav>

            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    )
}

export default Navbar 