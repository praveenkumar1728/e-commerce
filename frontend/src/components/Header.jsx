import logo from '../assets/images/logo-01.svg';
import barImage from '../assets/images/bar-1.svg';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = ({cartItems}) => {
  
  return (
    <div className="rts-header-one-area-one">

      {/* Top Bar (scrolls away) */}
      {/* <div className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bwtween-area-header-top">
                <div className="discount-area">
                  <p className="disc">
                    FREE delivery &amp; 40% Discount for next 3 orders! Place your 1st order in.
                  </p>
                  <div className="countdown">
                    <div className="countDown">
                      <div className="container"><div className="a"><div>43</div></div></div>
                      <div className="container"><div className="a"><div>16</div></div></div>
                      <div className="container"><div className="a"><div>23</div></div></div>
                      <div className="container"><div className="a"><div>21</div></div></div>
                    </div>
                  </div>
                </div>
                <div className="contact-number-area">
                  <p>
                    Need help? Call Us:&nbsp;
                    <a href="tel:+4733378901">+258 3268 21485</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Sticky Header (search + navigation) */}
      <div className="sticky-header">
        
        {/* Search, Logo & Actions Area */}
        <div className="search-header-area-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="logo-search-category-wrapper">
                  <Link to="/" className="logo-area">
                    {/* <img src={logo} alt="logo-main" className="logo" /> */}
                    <h3>My App</h3>
                  </Link>

                  {/* Category + Search */}
                  <div className="category-search-wrapper">
                    {/* <div className="category-btn category-hover-header">
                      <img className="parent" src={barImage} alt="icons" />
                      <span>Categories</span>
                      <div>
                        <ul className="category-sub-menu" id="category-active-four">
                          <li>
                            <span className="menu-item">
                              <img src="./assets/images/01.svg" alt="icons" />
                              <span>Breakfast &amp; Dairy</span>
                              <i className="fa-regular fa-plus"></i>
                            </span>
                            <ul className="submenu mm-collapse">
                              <li><Link className="mobile-menu-link" to="/shop">Breakfast</Link></li>
                              <li><Link className="mobile-menu-link" to="/shop">Dinner</Link></li>
                              <li><Link className="mobile-menu-link" to="/shop">Pumpkin</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <div className="search-header">
                      <Search />
                    </div>
                  </div>

                  {/* Account / Wishlist / Cart */}
                  <div className="accont-wishlist-cart-area-header">
                    <Link to="/account" className="btn-border-only account">
                      <i className="fa fa-user"></i><span>Account</span>
                    </Link>
                    <Link to="/wishlist" className="btn-border-only cart category-hover-header">
                      <i className="fa fa-heart"></i>
                      <span className="text">Wishlist</span>
                      <span className="number">0</span>
                    </Link>
                    <Link to="/cart" className="btn-border-only cart category-hover-header">
                      <i className="fa fa-cart-shopping"></i>
                      <span className="text">Cart</span>
                      <span className="number">{cartItems.length}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="rts-header-nav-area-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="nav-and-btn-wrapper">
                  <div className="nav-area">
                    <nav>
                      <ul className="parent-nav">
                        <li className="parent has-dropdown"><Link to="/">Home</Link></li>
                        <li className="parent"><Link to="/about">About</Link></li>
                        <li className="parent"><Link to="/shop">Shop</Link></li>
                        <li className="parent"><Link to="/blog">Blog</Link></li>
                        <li className="parent"><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="right-btn-area">
                    <a href="#" className="btn-narrow">Trending Products</a>
                    <button className="rts-btn btn-primary">Get 30% Discount Now<span>Sale</span></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 after-md-device-header">
                <div className="logo-search-category-wrapper">
                  <Link to="/" className="logo-area">
                    <img src={logo} alt="logo-main" className="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
