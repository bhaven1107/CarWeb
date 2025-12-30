import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import "./Footer.css";

const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div className="footer-brand" variants={item}>
          <h2>CarX Elite</h2>
          <p>
            Luxury cars crafted for performance, prestige,
            and perfection.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="footer-links" variants={item}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Brands</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* Brands */}
        <motion.div className="footer-links" variants={item}>
          <h3>Luxury Brands</h3>
          <ul>
            <li>BMW</li>
            <li>Mercedes-Benz</li>
            <li>Audi</li>
            <li>Porsche</li>
            <li>Lamborghini</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div className="footer-social" variants={item}>
          <h3>Follow Us</h3>
          <div className="social-icons">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.3,
                    rotate: 5,
                    boxShadow:
                      "0 0 20px rgba(212,175,55,0.8)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon />
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {new Date().getFullYear()} CarX Elite — Drive Excellence
      </motion.div>
    </footer>
  );
};

export default Footer;
