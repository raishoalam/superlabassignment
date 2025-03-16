// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaSnapchat, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Sephora Links */}
                <div className="footer-section">
                    <h4>About Sephora</h4>
                    <ul>
                        <li><Link to="/about">About Sephora</Link></li>
                        <li><Link to="/newsroom">Newsroom</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/sephora-values">Sephora Values</Link></li>
                        <li><Link to="/supply-chain-transparency">Supply Chain Transparency</Link></li>
                    </ul>
                </div>

                {/* Account Links */}
                <div className="footer-section">
                    <h4>My Sephora</h4>
                    <ul>
                        <li><Link to="/beauty-insider">Beauty Insider</Link></li>
                        <li><Link to="/sephora-credit-card">Sephora Credit Card</Link></li>
                        <li><Link to="/community-profile">Community Profile</Link></li>
                        <li><Link to="/order-status">Order Status</Link></li>
                        <li><Link to="/purchase-history">Purchase History</Link></li>
                    </ul>
                </div>

                {/* Customer Service Links */}
                <div className="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><Link to="/returns-exchanges">Returns & Exchanges</Link></li>
                        <li><Link to="/shipping">Shipping</Link></li>
                        <li><Link to="/billing">Billing</Link></li>
                        <li><Link to="/international-shipments">International Shipments</Link></li>
                        <li><Link to="/beauty-services-faq">Beauty Services FAQ</Link></li>
                    </ul>
                </div>

                {/* Social Media and Sign-Up Links */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><FaSnapchat /></a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                    </div>

                    <div className="signup">
                        <p>Sign up for updates:</p>
                        <input type="email" placeholder="Enter your email" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>

            {/* Region & Language */}
            <div className="footer-region">
                <p>United States - English</p>
                <p>Canada - English | Canada - Français</p>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
