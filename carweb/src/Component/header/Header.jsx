import React from 'react'
import "./Header.css"

const Header = () => {

    const popup = () => {
        var popup = document.getElementById("popup_main");
        
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    }

    return (
        <>
            <div className="main_home_page">

                {/* Navbar_Component */}

                <div className="Navbar_main_page">
                    <div className="navbar-container">
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

                        {/* RIGHT: USER ICON */}
                        <div className="navbar_icons">
                            <div className="navbar_container">
                                {/* RIGHT: Search ICON */}
                                <div className="search_icon">
                                    <a href="#" className="search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                </div>

                                {/* RIGHT: USER ICON */}
                                <div id="user_icon" onClick={popup}>
                                    <a href="#" id="user">
                                        <i class="fa-solid fa-user"></i>
                                    </a>
                                </div>

                                {/* RIGHT: CART */}
                                <div className="cart_icon">
                                    <a href="#" className="cart">
                                        <i class="fa-brands fa-opencart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {POPUP} */}
            <div id="popup_main">
                <div className="popup_content">
                    <i class="fa-solid fa-user"></i>
                    <ul>
                        <li>Profile</li>
                        <li>Whishlist</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
