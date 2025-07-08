import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect, useRef } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import backgroundImage from '../assets/images/background.png'
import waveSvg from '../assets/wave.svg'
import formSvg from '../assets/formy.svg'
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
// import germanyFlag from '../assets/images/germany.png'
// import americaFlag from '../assets/images/america.png'
import dubaiImg from '../assets/images/dubai.png'
import zanzibarImg from '../assets/images/zanzibar.png'
import parisImg from '../assets/images/paris.png'
import user1 from '../assets/images/african.jpeg'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/ghanian.jpeg'
import partner1 from '../assets/images/partner1.png'
import partner2 from '../assets/images/partner2.png'
import partner3 from '../assets/images/partner3.png'
import partner4 from '../assets/images/partner4.png'
import partner5 from '../assets/images/partner5.png'
import partner6 from '../assets/images/partner6.png'
import partner7 from '../assets/images/partner7.png'
import partner8 from '../assets/images/partner8.png'
import partner9 from '../assets/images/partner9.png'
import styles from './travel.module.css'
import { GB, CA, DE, LT, MS, FI, RU, BG, MT, PT, QA, AE, KW, GH, KE, CI } from 'country-flag-icons/react/3x2'


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
        <div className={styles["travel-wrapper"]}>
            <div className={styles["travel-home"]}>
                <div className={styles["travel-hero-section"]} style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    position: 'relative'
                }}>
                    <Navbar />
                    <div className={styles["travel-hero-content"]}>
                        <div className={styles["travel-hero-title"]}>
                            <h1>
                                <span>Your Global Travel</span>
                                <span>& Relocation Hub</span>
                            </h1>
                            <p>From flights to visas and accommodation, we help you move with ease.</p>
                            <div className={styles["travel-hero-buttons"]}>
                                <button className={styles["travel-learn-more-btn"]}>Learn More</button>
                                <button className={styles["travel-get-started-btn"]}>Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["travel-wave-container"]}>
                        <object type="image/svg+xml" data={waveSvg} className={styles["travel-wave-svg"]} aria-label="Wave">
                            <img src={waveSvg} alt="Wave" />
                        </object>
                        <div className={styles["travel-search-box"]} ref={searchBoxRef}>
                            <div className={styles["travel-search-content"]}>
                                <div className={styles["travel-search-item"]}>
                                    <span className={styles["travel-search-label"]}>Destination</span>
                                    <div className={styles["travel-search-value-container"]} onClick={() => toggleDropdown('destination')}>
                                        <img src={locationIcon} alt="location" className={styles["travel-search-icon"]} />
                                        <div className={styles["travel-search-value"]}>{searchValues.destination}</div>
                                        {isOpen.destination && (
                                            <div className={styles["travel-search-dropdown"]}>
                                                {destinations.map((dest) => (
                                                    <div
                                                        key={dest}
                                                        className={styles["travel-dropdown-item"]}
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
                                <div className={styles["travel-search-divider"]}></div>
                                <div className={styles["travel-search-item"]}>
                                    <span className={styles["travel-search-label"]}>Type</span>
                                    <div className={styles["travel-search-value-container"]} onClick={() => toggleDropdown('type')}>
                                        <img src={oneWayIcon} alt="one way" className={styles["travel-search-icon"]} />
                                        <div className={styles["travel-search-value"]}>{searchValues.type}</div>
                                        {isOpen.type && (
                                            <div className={styles["travel-search-dropdown"]}>
                                                {types.map((type) => (
                                                    <div
                                                        key={type}
                                                        className={styles["travel-dropdown-item"]}
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
                                <div className={styles["travel-search-divider"]}></div>
                                <div className={styles["travel-search-item"]}>
                                    <span className={styles["travel-search-label"]}>Price</span>
                                    <div className={styles["travel-search-value-container"]} onClick={() => toggleDropdown('price')}>
                                        <img src={priceIcon} alt="price" className={styles["travel-search-icon"]} />
                                        <div className={styles["travel-search-value"]}>{searchValues.price}</div>
                                        {isOpen.price && (
                                            <div className={styles["travel-search-dropdown"]}>
                                                {prices.map((price) => (
                                                    <div
                                                        key={price}
                                                        className={styles["travel-dropdown-item"]}
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
                                <div className={styles["travel-search-divider"]}></div>
                                <div className={styles["travel-search-item"]}>
                                    <span className={styles["travel-search-label"]}>Date</span>
                                    <div className={styles["travel-search-value-container"]} onClick={() => toggleDropdown('date')}>
                                        <img src={calenderIcon} alt="calendar" className={styles["travel-search-icon"]} />
                                        <div className={styles["travel-search-value"]}>{searchValues.date}</div>
                                        {isOpen.date && (
                                            <div className={styles["travel-search-dropdown"]} onClick={handleCalendarClick}>
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={handleDateChange}
                                                    dateFormat="MMM d'th'"
                                                    minDate={new Date()}
                                                    placeholderText="Select a date"
                                                    className={styles["travel-custom-date-input"]}
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
                                <button className={styles["travel-book-btn"]}>Book</button>
                            </div>
                        </div>
                        <div className={styles["travel-intro-section"]}>
                            <h3>
                                Our Service Categories
                            </h3>
                            <p>
                                Rest assured, with our trusted solutions, your global journey begins with seamless booking and personalized support every step of the way.
                            </p>
                        </div>
                        <div className={styles["travel-cards-section"]}>
                            <div className={styles["travel-cards-grid"]}>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card1} alt="Flight Bookings" />
                                    </div>
                                    <h3>Flight Bookings</h3>
                                    <p>Book domestic and international flights at competitive rates, with live support and flexible options.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card2} alt="Hotel Reservations" />
                                    </div>
                                    <h3>Hotel Reservations</h3>
                                    <p>Secure accommodations worldwide—from budget-friendly stays to luxury resorts.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card3} alt="Study Visa Support" />
                                    </div>
                                    <h3>Study Visa Support</h3>
                                    {/* <h3>(Citizenship by Investment)</h3> */}
                                    <p>Get expert guidance on documentation, application, and interview prep for student visas.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card4} alt="Work Visa Assistance" />
                                    </div>
                                    <h3>Work Visa Assistance</h3>
                                    <p>Explore job opportunities abroad and get help securing valid work visas.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card5} alt="Study Loans" />
                                    </div>
                                    <h3>Study Loans</h3>
                                    <p>Access educational financing tailored for international students, with flexible repayment terms.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card6} alt="Vacation & Excursions" />
                                    </div>
                                    <h3>Vacation & Excursions</h3>
                                    <p>Join curated holiday packages for relaxation, fun, and discovery—locally and internationally.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>
                                <div className={styles["travel-card"]}>
                                    <div className={styles["travel-card-image"]}>
                                        <img src={card7} alt="Savings Plan" />
                                    </div>
                                    <h3>Savings Pilgrimage Services </h3>
                                    <h3> (Hajj & Umrah)Plan</h3>
                                    <p>Plan your spiritual journey with full support—from registration to travel logistics.</p>
                                    <button className={styles["travel-learn-more"]}>Book Now</button>
                                </div>

                            </div>
                        </div>
                        <section className={styles["how-it-works-section"]}>
                            <h2>How it works</h2>
                            <p>Plan your next move in 4 simple steps.</p>

                            <div className={styles["steps-container"]}>
                                <div className={styles["step-item"]}>
                                    <div className={styles["step-number"]}>
                                        <span className={styles["number"]}>1</span>
                                    </div>
                                    <div className={styles["step-content"]}>
                                        <h3>Choose a Service</h3>
                                        <p>Select what you need — from flight bookings to visa support, loans, or hotel reservations.</p>
                                    </div>
                                </div>

                                <div className={styles["step-item"]}>
                                    <div className={styles["step-number"]}>
                                        <span className={styles["number"]}>2</span>
                                    </div>
                                    <div className={styles["step-content"]}>
                                        <h3>Submit Your Details</h3>
                                        <p>Fill out a quick form so we can understand your request and preferences.</p>
                                    </div>
                                </div>

                                <div className={styles["step-item"]}>
                                    <div className={styles["step-number"]}>
                                        <span className={styles["number"]}>3</span>
                                    </div>
                                    <div className={styles["step-content"]}>
                                        <h3>We Reach Out</h3>
                                        <p>Our team reviews your request and gets in touch with the best options tailored to you.</p>
                                    </div>
                                </div>

                                <div className={styles["step-item"]}>
                                    <div className={styles["step-number"]}>
                                        <span className={styles["number"]}>4</span>
                                    </div>
                                    <div className={styles["step-content"]}>
                                        <h3>Process Begins</h3>
                                        <p>Once you're ready, we handle the rest — bookings, documentation, and support until completion.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <div className="why-choose-section">
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
                        </div> */}

                        <div className={styles["travel-countries-section"]}>
                            <object type="image/svg+xml" data={formSvg} className={styles["travel-country-wave-svg"]}>Country Wave</object>
                            <div className={styles["travel-countries-content"]}>
                                <h2>Need help planning your travel or relocation?</h2>
                                <p>Send us a message and our team will respond promptly to guide you every step of the way.</p>
                                <form className={styles["travel-contact-form"]}>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className={styles["travel-form-input"]}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className={styles["travel-form-input"]}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className={styles["travel-form-input"]}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Service Interested"
                                        className={styles["travel-form-input"]}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Country of Interest"
                                        className={styles["travel-form-input"]}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Departure Date"
                                        className={styles["travel-form-input"]}
                                    />
                                    <textarea
                                        placeholder="Message"
                                        className={styles["travel-form-input"] + ' ' + styles["travel-form-textarea"]}
                                    ></textarea>
                                    <button type="submit" className={styles["travel-submit-btn"]}>
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles["travel-tour-deals"]}>
                            {/* <object type="image/svg+xml" data={waveSvg} className="travel-tour-wave-svg">Tour Wave</object> */}
                            <div className={styles["travel-tour-deals-content"]}>
                                <h2>Tour Deals You'll Love</h2>
                                <p>Exclusive packages, unforgettable destinations, and prices made for every kind of traveler.</p>
                                <div className={styles["travel-tour-cards"]}>
                                    <div className={styles["travel-tour-card"]}>
                                        <img src={dubaiImg} alt="Dubai" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Discover Dubai Getaway</h3>
                                            <span>4 days</span>
                                            <p>Experience the perfect blend of modern luxury and cultural heritage. This all-in-one Dubai package covers everything from desert safaris to world-class shopping.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["travel-tour-card"]}>
                                        <img src={zanzibarImg} alt="Zanzibar" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Zanzibar Beach Escape</h3>
                                            <span>6 Days / 5 Nights</span>
                                            <p>Sink your feet into the white sands of Zanzibar. This relaxing escape is designed for honeymooners, solo travelers, or anyone who needs a reset by the ocean.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["travel-tour-card"]}>
                                        <img src={parisImg} alt="Paris" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Paris Explorer</h3>
                                            <span>7 Days / 6 Nights</span>
                                            <p>Fall in love with the City of Light. From the Eiffel Tower to wine-tasting experiences, explore Paris like a local with guided charm and convenience.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Return flights</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Central hotel accommodation</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Louvre Museum pass</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Seine River cruise</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* second row */}
                                <div className={styles["travel-tour-cards"]}>
                                    <div className={styles["travel-tour-card"]}>
                                        <img src={dubaiImg} alt="Dubai" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Discover Dubai Getaway</h3>
                                            <span>4 days</span>
                                            <p>Experience the perfect blend of modern luxury and cultural heritage. This all-in-one Dubai package covers everything from desert safaris to world-class shopping.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["travel-tour-card"]}>
                                        <img src={zanzibarImg} alt="Zanzibar" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Zanzibar Beach Escape</h3>
                                            <span>6 Days / 5 Nights</span>
                                            <p>Sink your feet into the white sands of Zanzibar. This relaxing escape is designed for honeymooners, solo travelers, or anyone who needs a reset by the ocean.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Flight + 4-star hotel</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Dubai city tour & Burj Khalifa entry</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Desert safari with dinner</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Airport transfers</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles["travel-tour-card"]}>
                                        <img src={parisImg} alt="Paris" />
                                        <div className={styles["travel-tour-info"]}>
                                            <h3>Paris Explorer</h3>
                                            <span>7 Days / 6 Nights</span>
                                            <p>Fall in love with the City of Light. From the Eiffel Tower to wine-tasting experiences, explore Paris like a local with guided charm and convenience.</p>
                                            <div className={styles["travel-tour-features"]}>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Return flights</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Central hotel accommodation</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Louvre Museum pass</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Seine River cruise</span>
                                                </div>
                                                <div className={styles["travel-feature"]}>
                                                    <span className={styles["dot"]}></span>
                                                    <span>Daily breakfast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <div className="journey-section">
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
                        </div> */}

                        {/* <div className="partners-section">
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
                        </div> */}

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 