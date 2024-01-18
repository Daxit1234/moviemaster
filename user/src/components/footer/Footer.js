import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to our cinematic universe, where the magic of movies comes to life! Dive into a world of entertainment at your fingertips. With just a few clicks, you can secure your tickets to the latest blockbusters, timeless classics, and hidden gems waiting to be discovered. Our seamless booking experience ensures that your journey from selection to reservation is smooth and enjoyable. Whether you're a fan of heart-pounding action, gut-busting comedy, or soul-stirring drama, we've got your seat covered. Your cinematic adventure begins here – book now, and let the reel magic unfold. Lights, camera, action awaits you!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

