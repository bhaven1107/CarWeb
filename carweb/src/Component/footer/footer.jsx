import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="container">
        <div className="row">

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title">CONTACT</h4>

            <div className="footer-contact">
              <p>
                <i className="fa-solid fa-location-dot"></i>
                <span>
                  Etrend Autoparts<br />
                  123 Street, City, London<br />
                  United States
                </span>
              </p>

              <p>
                <i className="fa-solid fa-envelope"></i>
                <span>sales@domain.com</span>
              </p>

              <p>
                <i className="fa-solid fa-phone"></i>
                <span>(123) 456 7890</span>
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title">PRODUCTS</h4>
            <ul className="footer-links">
              <li>Prices drop</li>
              <li>New products</li>
              <li>Best sales</li>
              <li>Sitemap</li>
              <li>Stores</li>
            </ul>
          </div>

          {/* OUR COMPANY */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title">OUR COMPANY</h4>
            <ul className="footer-links">
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>About us</li>
              <li>Secure payment</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title">SUBSCRIBE</h4>
            <p className="subscribe-text">
              Enter your email & hit send to subscribe
              & get latest news & updates
            </p>

            <input
              type="email"
              placeholder="Enter your email address"
              className="subscribe-input"
            />

            <button className="subscribe-btn">SEND</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
