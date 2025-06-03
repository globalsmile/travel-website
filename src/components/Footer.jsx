// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import group14 from "../assets/Group 14 Copy.png";
import Mpesa from "../assets/Bitmap (2).jpg"
import Discover from "../assets/Bitmap.jpg";
import Visa from "../assets/Bitmap (4).jpg";
import PayPal from "../assets/Bitmap (3).jpg";
import MasterCard from "../assets/Bitmap (1).jpg";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__top">
      <div className="footer__section">
        <h4 className="footer__title">Need Travelsy Help?</h4>
        <p className="footer__text">Got Questions? Call us 24/7!</p>
        <p className="footer__text">Call Us: +254 716999915</p>
        <p className="footer__text">Email Us: info@travelsy.co</p> <br /> <br />
        <p className="footer__title">Contact Info:</p>
        <p className="footer__text">
          2nd Floor, Feshia Plaza, Westlands, Nairobi, Kenya
        </p>
        <p className="footer__text">P.O Box 7231‑00100 Nairobi, Kenya</p>
        <img src={group14} alt="" />
      </div>

      <div className="footer__section">
        <h4 className="footer__title">Company</h4>
        <ul className="footer__list">
          <li><a href="#about">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#terms">Terms Of Use</a></li>
          <li><a href="#privacy">Privacy Statement</a></li>
          <li><a href="#feedback">Give Us Feedback</a></li>
          <li><a href="#partner">Partner With Us</a></li>
        </ul>
      </div>

      <div className="footer__section">
        <h4 className="footer__title">Other Services & Support</h4>
        <ul className="footer__list">
          <li><a href="#rewards">Rewards Program</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#legal">Legal</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#customer-service">Customer Service Help</a></li>
        </ul>
      </div>

      <div className="footer__section">
        <h4 className="footer__title">Quick Links</h4>
        <ul className="footer__list">
          <li><a href="#account">Your Account</a></li>
          <li><a href="#locations">Camping Locations</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#equipment">Hire Equipment</a></li>
        </ul>
      </div>

      <div className="footer__section footer__newsletter">
        <h4 className="footer__title">Mailing List</h4>
        <p className="footer__text">
          Sign Up for our mailing list and get the latest offers and promotions straight in your inbox.
        </p>
        <form className="footer__newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
            className="footer__newsletter-input"
          />
          <button type="submit" className="footer__newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="container footer__bottom-container">
        <div className="footer__branding">
          <span>Travelsy</span>
        </div>
        <div className="footer__payments">
          {/* Replace with actual logos or icons */}
          <img src={Mpesa} alt="Mpesa" style={{width: 34, height: 27}}/>
          <img src={Discover} alt="Discover" style={{width: 34, height: 27}}/>
          <img src={Visa} alt="Visa" style={{width: 34, height: 27}}/>
          <img src={PayPal} alt="PayPal" style={{width: 34, height: 27}}/>
          <img src={MasterCard} alt="Mastercard" style={{width: 34, height: 27}}/>
        </div>
        <div className="footer__locale">
          <select className='footer__locale'>
            <option>English (United States)</option>
            <option>Kiswahili (Kenya)</option>
          </select>
          <select className='footer__locale'>
            <option>KES</option>
            <option>USD</option>
          </select>
        </div>
      </div>
      <div className="container footer__copy-container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Travelsy Ltd. All rights reserved.
        </p>
        <p className="footer__madeby">Made in Nigeria by 0xglobalsmile</p>
      </div>
    </div>
  </footer>
);

export default Footer;
