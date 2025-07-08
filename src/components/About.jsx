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
import card9 from '../assets/images/card9.png'
import card10 from '../assets/images/card10.png'
import trustIcon from '../assets/trust.svg'
import parisImg from '../assets/images/paris.png'
import user1 from '../assets/images/african.jpeg'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/ghanian.jpeg'
import './about.css'

function About() {
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 14,
        minutes: 14,
        seconds: 14
    });

    // Add state for search box
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
        <div className="about-wrapper">
            <div className="about-page">
                <div className="about-hero-section" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    position: 'relative'
                }}>
                    <Navbar />
                    <div className="about-hero-content">
                        <div className="about-hero-title">
                            <h1>
                                <span><span>Empowering Global Dreams,</span></span>
                                <span><span>One Journey at a Time</span></span>
                            </h1>
                            <p>From travel to finance, we're your trusted partner in global living.</p>
                            <div className="hero-buttons">
                                <button className="learn-more-btn">Learn More</button>
                                <button className="get-started-btn">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="about-wave-container">
                        <object type="image/svg+xml" data={waveSvg} className="about-wave-svg" aria-label="Wave">
                            <img src={waveSvg} alt="Wave" />
                        </object>

                        <div className="about-search-box" ref={searchBoxRef}>
                            <div className="about-search-content">
                                <div className="about-search-item">
                                    <span className="about-search-label">Destination</span>
                                    <div className="about-search-value-container" onClick={() => toggleDropdown('destination')}>
                                        <img src={locationIcon} alt="location" className="about-search-icon" />
                                        <div className="about-search-value">{searchValues.destination}</div>
                                        {isOpen.destination && (
                                            <div className="about-search-dropdown">
                                                {destinations.map((dest) => (
                                                    <div
                                                        key={dest}
                                                        className="about-dropdown-item"
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
                                <div className="about-search-divider"></div>
                                <div className="about-search-item">
                                    <span className="about-search-label">Type</span>
                                    <div className="about-search-value-container" onClick={() => toggleDropdown('type')}>
                                        <img src={oneWayIcon} alt="one way" className="about-search-icon" />
                                        <div className="about-search-value">{searchValues.type}</div>
                                        {isOpen.type && (
                                            <div className="about-search-dropdown">
                                                {types.map((type) => (
                                                    <div
                                                        key={type}
                                                        className="about-dropdown-item"
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
                                <div className="about-search-divider"></div>
                                <div className="about-search-item">
                                    <span className="about-search-label">Price</span>
                                    <div className="about-search-value-container" onClick={() => toggleDropdown('price')}>
                                        <img src={priceIcon} alt="price" className="about-search-icon" />
                                        <div className="about-search-value">{searchValues.price}</div>
                                        {isOpen.price && (
                                            <div className="about-search-dropdown">
                                                {prices.map((price) => (
                                                    <div
                                                        key={price}
                                                        className="about-dropdown-item"
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
                                <div className="about-search-divider"></div>
                                <div className="about-search-item">
                                    <span className="about-search-label">Date</span>
                                    <div className="about-search-value-container" onClick={() => toggleDropdown('date')}>
                                        <img src={calenderIcon} alt="calendar" className="about-search-icon" />
                                        <div className="about-search-value">{searchValues.date}</div>
                                        {isOpen.date && (
                                            <div className="about-search-dropdown calendar" onClick={handleCalendarClick}>
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    dateFormat="MMM d'th'"
                                                    minDate={new Date()}
                                                    placeholderText="Select a date"
                                                    className="about-custom-date-input"
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
                                <button className="about-book-btn">Book</button>
                            </div>
                        </div>

                        <div className="about-intro-section">
                            <h3>Who We Are</h3>
                            <p className="about-intro-subtitle">Rooted in Service, Driven by Possibility</p>
                            <p className="about-intro-content">
                                Grazconcept Innovation & multipurpose LTD began with a simple belief: everyone deserves an uncomplicated path to the world's opportunities.
                                Founded in Lagos and grown through partnerships on five continents, we've helped thousands of clients book life‑changing trips,
                                secure education funding, obtain second citizenship, and stay connected through seamless digital services.
                                Every solution we offer—whether a tour package, student loan, or Value Added Services—centres on clarity, affordability, and unwavering support.
                            </p>
                        </div>

                        <div className="about-mission-vision-section">
                            <div className="mission-container">
                                <div className="mission-image">
                                    <img src={card9} alt="Mission" />
                                </div>
                                <div className="mission-content">
                                    <h3>Mission</h3>
                                    <p>To simplify global travel, finance, and lifestyle services so people everywhere can explore, learn, and thrive across borders.</p>
                                </div>
                            </div>
                            <div className="vision-container">
                                <div className="vision-content">
                                    <h3>Vision</h3>
                                    <p>To be Africa's most trusted gateway to worldwide opportunities, empowering a new generation of global citizens.</p>
                                </div>
                                <div className="vision-image">
                                    <img src={card10} alt="Vision" />
                                </div>
                            </div>
                        </div>

                        <div className="about-impact-section">
                            <h2>Our Impact & Milestone</h2>
                            <p>Real results. Measurable growth. Life-changing journeys.</p>
                            <div className="impact-cards">
                                <div className="impact-card">
                                    <h3>3,500+</h3>
                                    <p>✅ Client Served</p>
                                </div>
                                <div className="impact-card">
                                    <h3>20+</h3>
                                    <p>🌐 Countries</p>
                                </div>
                                <div className="impact-card">
                                    <h3>50+</h3>
                                    <p>🤝 Global Partners</p>
                                </div>
                                <div className="impact-card">
                                    <h3>1200+</h3>
                                    <p>🏠 Successful Relocation</p>
                                </div>
                                <div className="impact-card">
                                    <h3>$500M+</h3>
                                    <p>💰 Disbursed in Edu Loans</p>
                                </div>
                            </div>
                            <button className="book-consultation-btn">Book a consultation</button>
                        </div>

                        <div className="core-values-section">
                            <h2>Our Core Value</h2>
                            <p>The heart of everything we do.</p>
                            <div className="values-grid">
                                <div className="value-card">
                                    <div className="value-icon">
                                        <img src={trustIcon} alt="Trust Icon" />
                                    </div>
                                    <div className="value-content">
                                        <h3>Trust</h3>
                                        <p>We build relationships on transparency and integrity. From your first inquiry to your final destination, you can count on us to keep our promises and protect your information.</p>
                                    </div>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">
                                        <img src={trustIcon} alt="Trust Icon" />
                                    </div>
                                    <div className="value-content">
                                        <h3>Innovation</h3>
                                        <p>We don't just keep up—we lead. By embracing smart tools and adaptive solutions, we constantly improve how we serve you in a changing world.</p>
                                    </div>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">
                                        <img src={trustIcon} alt="Trust Icon" />
                                    </div>
                                    <div className="value-content">
                                        <h3>Accessibility</h3>
                                        <p>Global opportunities should never feel out of reach. That's why we design services and plans that meet clients where they are—financially, culturally, and personally.</p>
                                    </div>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">
                                        <img src={trustIcon} alt="Trust Icon" />
                                    </div>
                                    <div className="value-content">
                                        <h3>Service Excellence</h3>
                                        <p>We treat every journey like it's our own. With dedicated support and attention to detail, we ensure a smooth, stress-free experience every step of the way.</p>
                                    </div>
                                </div>
                                <div className="value-card center-card">
                                    <div className="value-icon">
                                        <img src={trustIcon} alt="Trust Icon" />
                                    </div>
                                    <div className="value-content">
                                        <h3>Collaboration</h3>
                                        <p>Our strength lies in partnership. We work closely with trusted global institutions to deliver results that go beyond expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-gallery-section">
                            <object type="image/svg+xml" data={countryWaveSvg} className="gallery-wave-svg">Gallery Wave</object>
                            <div className="gallery-content">
                                <h2>Our Gallery</h2>
                                <p>Moments that tell our story.</p>
                                <div className="gallery-images">
                                    <div className="gallery-image">
                                        <img src={parisImg} alt="Paris Bridge" />
                                    </div>
                                    <div className="gallery-image">
                                        <img src={parisImg} alt="Paris Bridge" />
                                    </div>
                                    <div className="gallery-image">
                                        <img src={parisImg} alt="Paris Bridge" />
                                    </div>
                                    <div className="gallery-image">
                                        <img src={parisImg} alt="Paris Bridge" />
                                    </div>
                                    <div className="gallery-image">
                                        <img src={parisImg} alt="Paris Bridge" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-team-section">
                            <div className="team-content">
                                <h2>Meet Our Team</h2>
                                <p className="team-subtitle">The people behind your global journey.</p>
                                <p className="team-description">
                                    At Grazconcept Innovation & multipurpose LTD, our strength lies in our people. Our team is a diverse blend of travel experts,
                                    finance advisors, visa consultants, and support professionals—each dedicated to making your journey smooth,
                                    personal, and empowering. With years of experience and a passion for service, we work together to ensure
                                    every client feels seen, supported, and one step closer to their goals.
                                </p>

                                <div className="team-members">
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img src={user1} alt="Nkechi Okonjo" />
                                        </div>
                                        <h3>Nkechi Okonjo</h3>
                                        <h4>Client Relations Manager</h4>
                                        <p>The friendly face behind our support desk—always ready to guide, reassure, and help you feel at home, wherever you're headed.</p>
                                    </div>

                                    <div className="team-member">
                                        <div className="member-image">
                                            <img src={user2} alt="Jane Uche" />
                                        </div>
                                        <h3>Jane Uche</h3>
                                        <h4>Founder & CEO</h4>
                                        <p>A visionary leader with a passion for accessibility, Jane founded Grazconcept to help everyday people tap into extraordinary global opportunities.</p>
                                    </div>

                                    <div className="team-member">
                                        <div className="member-image">
                                            <img src={user3} alt="Tunde Adebayo" />
                                        </div>
                                        <h3>Tunde Adebayo</h3>
                                        <h4>Head of Travel Operations</h4>
                                        <p>With deep expertise in flight logistics and visa processes, Tunde ensures that every itinerary runs like clockwork.</p>
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

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 