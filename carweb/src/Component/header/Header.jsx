import React, { useState } from "react";
import "./Header.css";
// import Logo from "../../../public/assests/etrend-autoparts-logo-1607344212.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header py-4">
            <div className="container">
                <div className="row align-items-center">

                    {/* Logo */}
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="header-logo">
                            <img src="/assets/etrend-autoparts-logo-1607344212.png" alt="Logo" />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <nav className="header-nav">
                            <ul>
                                <li><a href="/Dashboard">Home</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/electronics">Electronics</a></li>
                                <li><a href="/sports-books">Sports & Books</a></li>
                                <li><a href="/sale" className="sale">Sale</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Icons + Hamburger */}
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="header-right">

                            <div className="header-icons">
                                <i class="fa-solid fa-user"></i> 
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>

                            {/* Animated Hamburger */}
                            <div
                                className={`hamburger ${menuOpen ? "active" : ""}`}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet Menu */}
                <nav className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li style={{ "--i": 1 }}><a href="/Dashboard">Home</a></li>
                        <li style={{ "--i": 2 }}><a href="/shop">Shop</a></li>
                        <li style={{ "--i": 3 }}><a href="/electronics">Electronics</a></li>
                        <li style={{ "--i": 4 }}><a href="/sports-books">Sports & Books</a></li>
                        <li style={{ "--i": 5 }}><a href="/sale" className="sale">Sale</a></li>
                        <li style={{ "--i": 6 }}><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
