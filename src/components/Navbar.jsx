import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/footer-logo.png'
import MobileNav from './MobileNav';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

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

    const handleSignInClick = () => {
        navigate('/signin');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

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
                        <a href="/">Home</a>
                        <a href="https://loan.grazconcept.com.ng/user/register">Services</a>
                        <a href="/tour" onClick={(e) => { e.preventDefault(); navigate('/tour'); }}>Tour</a>
                        <a href="/about" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About Us</a>
                        <a href="#contact">Contact</a>
                        <div className="partner-dropdown">
                            <a href="#partner" className="partner-link">
                                Partner
                                <svg className="dropdown-arrow-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#DA9B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <div className="partner-dropdown-content">
                                <a href="#institution">As Institution</a>
                                <a href="#highschool">As High School</a>
                                <a href="#organization">As Organization</a>
                            </div>
                        </div>
                        <button className="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
                        <button className="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
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