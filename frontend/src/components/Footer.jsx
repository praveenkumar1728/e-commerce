import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="rts-footer-area pt--80 bg_light-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-main-content-wrapper pb--70 pb_sm--30">
              {/* About Company */}
              <div className="single-footer-wized">
                <h3 className="footer-title">About Company</h3>
                <div className="call-area">
                  <div className="icon">
                    <i className="fa-solid fa-phone-rotary"></i>
                  </div>
                  <div className="info">
                    <span>Have Question? Call Us 24/7</span>
                    <a href="tel:+1234567890" className="number">+1234567890</a>
                  </div>
                </div>
                <div className="opening-hour">
                  <div className="single">
                    <p>Monday - Friday: <span>8:00am - 6:00pm</span></p>
                  </div>
                  <div className="single">
                    <p>Saturday: <span>8:00am - 4:00pm</span></p>
                  </div>
                  <div className="single">
                    <p>Sunday: <span>Service Close</span></p>
                  </div>
                </div>
              </div>

              {/* Our Stores */}
              <div className="single-footer-wized">
                <h3 className="footer-title">Our Stores</h3>
                <div className="footer-nav">
                  <ul>
                    <li><Link to="/stores">Our Stores</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                    <li><Link to="/support">Support Center</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                  </ul>
                </div>
              </div>

              {/* Shop Categories */}
              <div className="single-footer-wized">
                <h3 className="footer-title">Shop Categories</h3>
                <div className="footer-nav">
                  <ul>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/information">Information</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/stories">Nest Stories</Link></li>
                  </ul>
                </div>
              </div>

              {/* Useful Links */}
              <div className="single-footer-wized">
                <h3 className="footer-title">Useful Links</h3>
                <div className="footer-nav">
                  <ul>
                    <li><Link to="/returns">Cancellation &amp; Returns</Link></li>
                    <li><Link to="/report">Report Infringement</Link></li>
                    <li><Link to="/payments">Payments</Link></li>
                    <li><Link to="/shipping">Shipping</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="single-footer-wized">
                <h3 className="footer-title">Map</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.12005580181!2d76.95710775962036!3d11.017605188631316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012%2C%20India!5e0!3m2!1sen!2sbd!4v1757025027074!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            {/* Social + Payments */}
            <div className="social-and-payment-area-wrapper">
              <div className="social-one-wrapper">
                <span>Follow Us:</span>
                <ul>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                  <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div className="payment-access">
                <span>Payment Accepts:</span>
                <img src="assets/images/payment/01.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="rts-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-between-1">
                <p className="disc">
                  Copyright 2025 <Link to="/">©Ekomart</Link>. All rights reserved.
                </p>
                <a href="#" className="playstore-app-area">
                  <span>Download App</span>
                  <img src="assets/images/payment/02.png" alt="Google Play" />
                  <img src="assets/images/payment/03.png" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
