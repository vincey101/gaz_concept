import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect, useRef } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import backgroundImage from '../assets/images/background.png'
import waveSvg from '../assets/wave.svg'
import countryWaveSvg from '../assets/country-wave.svg'
import locationIcon from '../assets/location.svg'
import oneWayIcon from '../assets/one-way.svg'
import priceIcon from '../assets/price.svg'
import calenderIcon from '../assets/calender.svg'
import trustIcon from '../assets/trust.svg'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
import card6 from '../assets/images/card6.png'
import card7 from '../assets/images/card7.png'
import card8 from '../assets/images/card8.png'
import germanyFlag from '../assets/images/germany.png'
import americaFlag from '../assets/images/america.png'
import dubaiImg from '../assets/images/dubai.png'
import zanzibarImg from '../assets/images/zanzibar.png'
import parisImg from '../assets/images/paris.png'
import user1 from '../assets/images/user1.png'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/user3.png'
import partner1 from '../assets/images/partner1.png'
import partner2 from '../assets/images/partner2.png'
import partner3 from '../assets/images/partner3.png'
import partner4 from '../assets/images/partner4.png'
import partner5 from '../assets/images/partner5.png'
import partner6 from '../assets/images/partner6.png'
import partner7 from '../assets/images/partner7.png'
import partner8 from '../assets/images/partner8.png'
import partner9 from '../assets/images/partner9.png'
import './styles.css'


function Home() {
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 14,
        minutes: 14,
        seconds: 14
    });

    // Add new state for search box
    const [searchValues, setSearchValues] = useState({
        destination: 'UK to Japan',
        type: 'One way',
        price: '$300',
        date: 'Nov 28th'
    });

    const [isOpen, setIsOpen] = useState({
        destination: false,
        type: false,
        price: false,
        date: false
    });

    // Add state for showing more cards
    const [showMoreCards, setShowMoreCards] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);

    // Predefined options
    const destinations = [
        'UK to Japan',
        'US to Canada',
        'France to Italy',
        'Dubai to India'
    ];

    const types = ['One way', 'Round trip', 'Multi-city'];
    const prices = ['$300', '$500', '$750', '$1000'];

    // Format date as "MMM DD"
    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + 'th';
    };

    // Handle selection changes
    const handleSelect = (field, value) => {
        setSearchValues(prev => ({
            ...prev,
            [field]: value
        }));
        setIsOpen(prev => ({
            ...prev,
            [field]: false
        }));
    };

    // Toggle dropdown
    const toggleDropdown = (field) => {
        setIsOpen(prev => ({
            destination: false,
            type: false,
            price: false,
            date: false,
            [field]: !prev[field]
        }));
    };

    // Add ref for search box
    const searchBoxRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setIsOpen({
                    destination: false,
                    type: false,
                    price: false,
                    date: false
                });
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const getTargetDate = () => {
            const target = new Date();
            target.setDate(target.getDate() + 14);
            target.setHours(14, 14, 14);
            return target;
        };

        let targetDate = getTargetDate();

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                // Reset target date to new 14-day period when countdown reaches zero
                targetDate = getTargetDate();
            }

            // Calculate remaining time
            const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
            const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
            const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
            const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs once on mount

    // Update handleDateChange for react-datepicker
    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + 'th';
        handleSelect('date', formattedDate);
        // Close the dropdown after selection
        setIsOpen(prev => ({
            ...prev,
            date: false
        }));
    };

    // Add handler for calendar clicks
    const handleCalendarClick = (e) => {
        // Prevent click from bubbling up and closing the dropdown
        e.stopPropagation();
    };

    return (
        <div className="wrapper">
            <div className="home">
                <div className="hero-section" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    position: 'relative'
                }}>
                    <Navbar />
                    <div className="hero-content">
                        <div className="hero-title">
                            <h1>
                                <span>Empowering You to</span>
                                <span>Explore the World and Beyond</span>
                            </h1>
                            <p>Navigate travel, education, and job opportunities effortlessly.</p>
                            <div className="hero-buttons">
                                <button className="learn-more-btn">Learn More</button>
                                <button className="get-started-btn">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="wave-container">
                        <object type="image/svg+xml" data={waveSvg} className="wave-svg" aria-label="Wave">
                            <img src={waveSvg} alt="Wave" />
                        </object>
                        <div className="search-box" ref={searchBoxRef}>
                            <div className="search-content">
                                <div className="search-item">
                                    <span className="search-label">Destination</span>
                                    <div className="search-value-container" onClick={() => toggleDropdown('destination')}>
                                        <img src={locationIcon} alt="location" className="search-icon" />
                                        <div className="search-value">{searchValues.destination}</div>
                                        {isOpen.destination && (
                                            <div className="search-dropdown">
                                                {destinations.map((dest) => (
                                                    <div
                                                        key={dest}
                                                        className="dropdown-item"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSelect('destination', dest);
                                                        }}
                                                    >
                                                        {dest}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="search-divider"></div>
                                <div className="search-item">
                                    <span className="search-label">Type</span>
                                    <div className="search-value-container" onClick={() => toggleDropdown('type')}>
                                        <img src={oneWayIcon} alt="one way" className="search-icon" />
                                        <div className="search-value">{searchValues.type}</div>
                                        {isOpen.type && (
                                            <div className="search-dropdown">
                                                {types.map((type) => (
                                                    <div
                                                        key={type}
                                                        className="dropdown-item"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSelect('type', type);
                                                        }}
                                                    >
                                                        {type}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="search-divider"></div>
                                <div className="search-item">
                                    <span className="search-label">Price</span>
                                    <div className="search-value-container" onClick={() => toggleDropdown('price')}>
                                        <img src={priceIcon} alt="price" className="search-icon" />
                                        <div className="search-value">{searchValues.price}</div>
                                        {isOpen.price && (
                                            <div className="search-dropdown">
                                                {prices.map((price) => (
                                                    <div
                                                        key={price}
                                                        className="dropdown-item"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSelect('price', price);
                                                        }}
                                                    >
                                                        {price}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="search-divider"></div>
                                <div className="search-item">
                                    <span className="search-label">Date</span>
                                    <div className="search-value-container" onClick={() => toggleDropdown('date')}>
                                        <img src={calenderIcon} alt="calendar" className="search-icon" />
                                        <div className="search-value">{searchValues.date}</div>
                                        {isOpen.date && (
                                            <div className="search-dropdown calendar" onClick={handleCalendarClick}>
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    dateFormat="MMM d'th'"
                                                    minDate={new Date()}
                                                    placeholderText="Select a date"
                                                    className="custom-date-input"
                                                    inline
                                                    disabledKeyboardNavigation
                                                    shouldCloseOnSelect={true}
                                                    onClickOutside={() => {
                                                        setIsOpen(prev => ({
                                                            ...prev,
                                                            date: false
                                                        }));
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button className="book-btn">Book</button>
                            </div>
                        </div>
                        <div className="intro-section">
                            <h3>
                                Wherever you're headed, <span>we're already a step ahead</span>
                            </h3>
                            <p>
                                Rest assured, with our trusted solutions, your global journey begins with seamless booking and personalized support every step of the way.
                            </p>
                        </div>
                        <div className="cards-section">
                            <div className="cards-grid">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card1} alt="Travel & Finance Solutions" />
                                    </div>
                                    <h3>Travel & Finance Solutions</h3>
                                    <p>Book flights, get visa help, and travel with ease—stress-free from start to finish.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card2} alt="Edu Finance" />
                                    </div>
                                    <h3>Edu Finance</h3>
                                    <p>Flexible financing options to support your studies locally or abroad.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>

                                <div className="card">
                                    <div className="card-image">
                                        <img src={card3} alt="Global Access" />
                                    </div>
                                    <h3>Global Access</h3>
                                    <h3>(Citizenship by Investment)</h3>
                                    <p>Secure second citizenship through trusted investment programs.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card4} alt="Connect Services" />
                                    </div>
                                    <h3>Connect Services</h3>
                                    <p>Link to global partners, services, and support wherever you are.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card5} alt="Global Job/School Search" />
                                    </div>
                                    <h3>Global Job/School Search</h3>
                                    <p>Find and apply to jobs or schools worldwide—all in one place.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card6} alt="Manage Subscription" />
                                    </div>
                                    <h3>Manage Subscription</h3>
                                    <p>Easily update your preferences and stay in control of what matters.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card7} alt="Savings Plan" />
                                    </div>
                                    <h3>Savings Plan</h3>
                                    <p>Start smart saving plans for travel, education, and long-term goals.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card8} alt="VTU Solution" />
                                    </div>
                                    <h3>VTU Solution</h3>
                                    <p>Recharge airtime, data, and bills instantly—anytime, anywhere.</p>
                                    <button className="learn-more">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-section">
                            <h2>Pack Your Bags — Adventure Kicks Off In...</h2>
                            <p>Be part of something unforgettable. Tour begins shortly!</p>
                            <div className="timer-container">
                                <div className="timer-box">
                                    <span className="number">{timeLeft.days}</span>
                                    <span className="label">Days</span>
                                </div>
                                <div className="timer-box">
                                    <span className="number">{timeLeft.hours}</span>
                                    <span className="label">Hours</span>
                                </div>
                                <div className="timer-box">
                                    <span className="number">{timeLeft.minutes}</span>
                                    <span className="label">Mins</span>
                                </div>
                                <div className="timer-box">
                                    <span className="number">{timeLeft.seconds}</span>
                                    <span className="label">Secs</span>
                                </div>
                            </div>
                            <button className="view-tour">View Tour</button>
                        </div>


                        <div className="why-choose-section">
                            <h2>Why Choose Us</h2>
                            <p>Global expertise, personal service, proven results.</p>

                            <div className="why-choose-grid">
                                <div className="why-choose-card">
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>Trusted By Thousand</h3>
                                    <p>We've helped thousands of clients achieve their travel, education, and global mobility goals.</p>
                                </div>

                                <div className="why-choose-card">
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>All-in-One Services</h3>
                                    <p>From travel bookings to financial planning and global access, everything you need is in one place.</p>
                                </div>

                                <div className="why-choose-card">
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>Affordable & Flexible Options</h3>
                                    <p>We tailor solutions to fit your budget—no hidden fees, no stress.</p>
                                </div>

                                <button
                                    className="more-cards-btn"
                                    onClick={() => setShowMoreCards(!showMoreCards)}
                                >
                                    {showMoreCards ? "Show Less" : "More"}
                                </button>

                                <div className={`why-choose-card ${showMoreCards ? 'show-mobile' : 'hide-mobile'}`}>
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>Expert<br />Support</h3>
                                    <p>Our experienced team is always ready to guide you—every step of the way.</p>
                                </div>

                                <div className={`why-choose-card ${showMoreCards ? 'show-mobile' : 'hide-mobile'}`}>
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>Secure & Confidential</h3>
                                    <p>We prioritize your privacy and handle your information with the highest standards of security.</p>
                                </div>

                                <div className={`why-choose-card ${showMoreCards ? 'show-mobile' : 'hide-mobile'}`}>
                                    <img src={trustIcon} alt="Trust icon" className="trust-icon" />
                                    <h3>Real Results, Real Stories</h3>
                                    <p>Don't just take our word for it—see what our happy clients have to say.</p>
                                </div>
                            </div>
                        </div>

                        <div className="countries-section">
                            <object type="image/svg+xml" data={countryWaveSvg} className="country-wave-svg">Country Wave</object>
                            <div className="countries-content">
                                <h2>Countries We Serve</h2>
                                <p>Connecting people across borders - serving clients worldwide.</p>
                                <div className="flags-grid">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={`germany-${i}`} className="flag-item">
                                            <img src={germanyFlag} alt="Germany flag" />
                                            <span>Germany</span>
                                        </div>
                                    ))}
                                    {[...Array(9)].map((_, i) => (
                                        <div key={`us-${i}`} className="flag-item">
                                            <img src={americaFlag} alt="United States flag" />
                                            <span>United States</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="tour-deals">
                            <object type="image/svg+xml" data={waveSvg} className="tour-wave-svg">Tour Wave</object>
                            <div className="tour-deals-content">
                                <h2>Tour Deals You'll Love</h2>
                                <p>Exclusive packages, unforgettable destinations, and prices made for every kind of traveler.</p>
                                <div className="tour-cards">
                                    <div className="tour-card">
                                        <img src={dubaiImg} alt="Dubai" />
                                        <div className="tour-info">
                                            <h3>Discover Dubai Getaway</h3>
                                            <span>4 days</span>
                                            <p>Experience the perfect blend of modern luxury and cultural heritage. This all-in-one Dubai package covers everything from desert safaris to world-class shopping.</p>
                                            <div className="tour-features">
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tour-card">
                                        <img src={zanzibarImg} alt="Zanzibar" />
                                        <div className="tour-info">
                                            <h3>Zanzibar Beach Escape</h3>
                                            <span>6 Days / 5 Nights</span>
                                            <p>Sink your feet into the white sands of Zanzibar. This relaxing escape is designed for honeymooners, solo travelers, or anyone who needs a reset by the ocean.</p>
                                            <div className="tour-features">
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tour-card">
                                        <img src={parisImg} alt="Paris" />
                                        <div className="tour-info">
                                            <h3>Paris Explorer</h3>
                                            <span>7 Days / 6 Nights</span>
                                            <p>Fall in love with the City of Light. From the Eiffel Tower to wine-tasting experiences, explore Paris like a local with guided charm and convenience.</p>
                                            <div className="tour-features">
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Return flights</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Central hotel accommodation</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Louvre Museum pass</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Seine River cruise</span>
                                                </div>
                                                <div className="feature">
                                                    <span className="dot"></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="journey-section">
                            <h2>Journeys Shared, Memories Made</h2>
                            <p className="journey-subtitle">Every trip has a story—here's what our travelers had to say</p>

                            <div className="testimonial-images">
                                <img src={user1} alt="User 1" className="user-image" />
                                <img src={user2} alt="User 2" className="user-image" />
                                <img src={user3} alt="User 3" className="user-image" />
                            </div>

                            <h3 className="reviewer-name">Sarah J. - Dubai Getaway</h3>

                            <div className="rating">
                                <span className="rating-label">Rating: </span>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <span className="rating-text">(5/5)</span>
                            </div>

                            <blockquote className="testimonial-quote">
                                "My trip to Dubai was an absolute dream! The team made everything seamless,
                                from the flight booking to the desert safari experience. I never had to worry
                                about a thing—everything was taken care of. I highly recommend this tour for
                                anyone looking to explore Dubai with ease."
                            </blockquote>
                        </div>

                        <div className="partners-section">
                            <h2>Our Trusted Partners</h2>
                            <p className="partners-subtitle">Together, we create seamless travel experiences and global opportunities.</p>

                            <div className="partner-logos">
                                <img src={partner1} alt="Partner 1" className="partner-logo" />
                                <img src={partner2} alt="Partner 2" className="partner-logo" />
                                <img src={partner3} alt="Partner 3" className="partner-logo" />
                                <img src={partner4} alt="Partner 4" className="partner-logo" />
                                <img src={partner5} alt="Partner 5" className="partner-logo" />
                                <img src={partner6} alt="Partner 6" className="partner-logo" />
                                <img src={partner7} alt="Partner 7" className="partner-logo" />
                                <img src={partner8} alt="Partner 8" className="partner-logo" />
                                <img src={partner9} alt="Partner 9" className="partner-logo" />
                            </div>

                            <p className="partner-cta">Looking to partner with us? Let's build a future of seamless global connections together.</p>
                            <button className="become-partner-btn">Become a Partner</button>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 