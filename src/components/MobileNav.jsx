import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MobileNav({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [showPartnerSubmenu, setShowPartnerSubmenu] = useState(false);

    const handleSignInClick = () => {
        onClose();
        navigate('/signin');
    };

    const handleSignUpClick = () => {
        onClose();
        navigate('/signup');
    };

    const handleAboutClick = () => {
        onClose();
        navigate('/about');
    };

    const handleTourClick = () => {
        onClose();
        navigate('/tour');
    };

    const togglePartnerSubmenu = () => {
        setShowPartnerSubmenu(!showPartnerSubmenu);
    };

    return (
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="mobile-nav-items">
                <a href="/" onClick={onClose}>Home</a>
                <a href="https://loan.grazconcept.com.ng/user/register" onClick={onClose}>Services</a>
                <a href="/tour" onClick={(e) => { e.preventDefault(); handleTourClick(); }}>Tour</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About Us</a>
                <a href="#contact" onClick={onClose}>Contact</a>

                <div className="mobile-submenu">
                    <div className="mobile-submenu-header" onClick={togglePartnerSubmenu}>
                        <span>Partner</span>
                        <svg className={`dropdown-arrow-icon ${showPartnerSubmenu ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#DA9B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {showPartnerSubmenu && (
                        <div className="mobile-submenu-content">
                            <a href="#institution" onClick={onClose}>As Institution</a>
                            <a href="#highschool" onClick={onClose}>As High School</a>
                            <a href="#organization" onClick={onClose}>As Organization</a>
                        </div>
                    )}
                </div>

                <button className="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
                <button className="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
            </div>
        </div>
    );
}

export default MobileNav; 