// Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faLinkedin,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

export default function FooterLayout (){
    function getCurrentYear() {
        const now = new Date();
        return now.getFullYear();
    }

    
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Left Section */}
                <div className="left-section">
                    <h3>Contact Us</h3>
                    <p>FR. WASONGA’S GIRLS AND BOY EDUCATIONAL AND DEVELOPMENT FUND</p>
                    <p>123 Charity Avenue</p>
                    <p>ELDORET,  KENYA, 30100</p>
                    <p>Email: wasilpaul@yahoo.com</p>
                    <p>TEL: +(254) 720803208</p>

                    {/* Social Media Icons */}
                    <div className="social-media-styles">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="icon-style" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-style" />
                    </a>
                    </div>
                </div>

                {/* Right Section with Google Maps */}
                <div className="right-section">
                    <h3>Our Location</h3>
                    <iframe
                    title="Charity Headquarters Location"
                    src="https://www.google.com/maps/embed/v1/place?q=123+Charity+Avenue,City,State&key=YOUR_GOOGLE_MAPS_API_KEY"
                    width="100%"
                    height="100%"
                    aria-hidden="false"
                    tabIndex="0"
                    className="maps-styles"
                    allowFullScreen
                    loading="lazy"
                    ></iframe>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p>FR. WASONGA’S GIRLS AND BOY EDUCATIONAL AND DEVELOPMENT FUND. </p>
                <p>{getCurrentYear()} &copy; All rights reserved | Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};

