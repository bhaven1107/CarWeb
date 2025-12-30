import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <h2>CarX Elite</h2>
                    <p>
                        Experience luxury, performance, and innovation.
                        Your destination for premium cars.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Cars</li>
                        <li>Brands</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Brands */}
                <div className="footer-links">
                    <h3>Luxury Brands</h3>
                    <ul>
                        <li>BMW</li>
                        <li>Mercedes-Benz</li>
                        <li>Audi</li>
                        <li>Porsche</li>
                        <li>Lamborghini</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} CarX Elite. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
