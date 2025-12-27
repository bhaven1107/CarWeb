import React from "react";
import "./Home.css";


const Home = () => {

    const [showUserMenu, setShowUserMenu] = React.useState(false);

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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

