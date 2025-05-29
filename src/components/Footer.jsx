import footerLogo from '../assets/images/footer-logo.png'
import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={footerLogo} alt="Grazconcept Logo" className="footer-logo" />
                    <p className="company-description">
                        <span className="company-name">Grazconcept Nig. LTD</span> is a dynamic solutions
                        provider committed to simplifying global travel,
                        education, and lifestyle services for individuals
                        and families across the world. From tailored tour
                        packages, flight bookings, and visa assistance to
                        education financing, global access programs, and
                        digital solutions like VTU services—we make
                        international dreams more accessible, affordable,
                        and stress-free.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <span>Address: [Your Office Address]</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <span>Phone: [Phone Number]</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">✉️</span>
                            <span>Email: [Support Email]</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">🕐</span>
                            <span>Office Hours: Mon–Fri, 9AM–5PM</span>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#facebook">Facebook</a>
                        <span className="divider">|</span>
                        <a href="#instagram">Instagram</a>
                        <span className="divider">|</span>
                        <a href="#twitter">Twitter</a>
                        <span className="divider">|</span>
                        <a href="#linkedin">LinkedIn</a>
                        <span className="divider">|</span>
                        <a href="#whatsapp">WhatsApp</a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company Info</h3>
                        <ul>
                            <li><a href="#about">About Grazconcept</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#why">Why Choose Us</a></li>
                            <li><a href="#countries">Countries We Serve</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#packages">Tour Packages</a></li>
                            <li><a href="#booking">Flight Booking</a></li>
                            <li><a href="#visa">Visa Assistance</a></li>
                            <li><a href="#education">Education Finance</a></li>
                            <li><a href="#citizenship">Global Citizenship</a></li>
                            <li><a href="#vtu">VTU Solutions</a></li>
                            <li><a href="#jobs">Job & School Search</a></li>
                            <li><a href="#savings">Savings Plans</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#partner">Partner With Us</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#newsletter">Subscribe to Newsletter</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#refund">Refund Policy</a></li>
                            <li><a href="#cookie">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Grazconcept Nig. LTD. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer 