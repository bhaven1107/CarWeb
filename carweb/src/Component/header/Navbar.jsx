import React, { useState } from "react";
import "./Navbar.css";
import { FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="navbar-container">
            {/* LEFT: LOGO */}
            <div className="navbar-logo">
                <a href="#">
                    <span>Car </span>
                    <span id="X"> X </span>
                    <span>Elite</span>
                </a>
            </div>

            {/* CENTER: MENU */}
            <ul className="navbar-menu">
                <li>Home</li>
                <li>Cars</li>
                <li>Brands</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

            {/* RIGHT: ICONS */}
            <div className="navbar-icons">
                {/* USER ICON */}
                <div
                    className="user-icon"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                >
                    <FaUserCircle />
                    {showUserMenu && (
                        <div className="user-dropdown">
                            <p>Login</p>
                            <p>Register</p>
                        </div>
                    )}
                </div>

                {/* WISHLIST */}
                <FaHeart className="icon" />

                {/* CART */}
                <FaShoppingCart className="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
