import React from 'react';

export default function Sidebar() {
  return (
    <div id="side-bar" className="side-bar header-two">
      <button className="close-icon-menu">
        <i className="far fa-times"></i>
      </button>

      <form className="search-input-area-menu mt--30" action="#">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="mobile-menu-nav-area tab-nav-btn mt--20">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active">Menu</button>
            <button className="nav-link">Category</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div>
            <div className="mobile-menu-main">
              <nav className="nav-main mainmenu-nav mt--30">
                <ul className="mainmenu metismenu" id="mobile-menu-active">
                  <li className="has-droupdown">
                    <a href="#" className="main">Home</a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="/">Home One</a></li>
                      <li><a className="mobile-menu-link" href="/index-two">Home Two</a></li>
                      <li><a className="mobile-menu-link" href="/index-three">Home Three</a></li>
                      <li><a className="mobile-menu-link" href="/index-four">Home Four</a></li>
                      <li><a className="mobile-menu-link" href="/index-five">Home Five</a></li>
                    </ul>
                  </li>
                  <li><a className="main" href="/about">About</a></li>
                  <li className="has-droupdown">
                    <a href="#" className="main">Pages</a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="/about">About</a></li>
                      <li><a className="mobile-menu-link" href="/faq">Faq&#39;s</a></li>
                      <li><a className="mobile-menu-link" href="/invoice">Invoice</a></li>
                      <li><a className="mobile-menu-link" href="/contact">Contact</a></li>
                      <li><a className="mobile-menu-link" href="/register">Register</a></li>
                      <li><a className="mobile-menu-link" href="/login">Login</a></li>
                      <li><a className="mobile-menu-link" href="/privacy-policy">Privacy Policy</a></li>
                      <li><a className="mobile-menu-link" href="/cookies-policy">Cookies Policy</a></li>
                      <li><a className="mobile-menu-link" href="/terms-condition">Terms Condition</a></li>
                      <li><a className="mobile-menu-link" href="/404">Error Page</a></li>
                    </ul>
                  </li>
                  <li className="has-droupdown">
                    <a href="#" className="main">Shop</a>
                    <ul className="submenu mm-collapse">
                      <li className="has-droupdown third-lvl">
                        <a href="#" className="main">Shop Layout</a>
                        <ul className="submenu-third-lvl mm-collapse">
                          <li><a href="/shop-grid-sidebar">Shop Grid Sidebar</a></li>
                          <li><a href="/shop-list-sidebar">Shop List Sidebar</a></li>
                          <li><a href="/shop-grid-top-filter">Shop Grid Top Filter</a></li>
                          <li><a href="/shop-list-top-filter">Shop List Top Filter</a></li>
                        </ul>
                      </li>
                      <li className="has-droupdown third-lvl">
                        <a href="#" className="main">Shop Details</a>
                        <ul className="submenu-third-lvl mm-collapse">
                          <li><a href="/shop-details">Shop Details</a></li>
                          <li><a href="/shop-details-2">Shop Details 2</a></li>
                          <li><a href="/shop-grid-top-filter">Shop Grid Top Filter</a></li>
                          <li><a href="/shop-list-top-filter">Shop List Top Filter</a></li>
                        </ul>
                      </li>
                      <li className="has-droupdown third-lvl">
                        <a href="#" className="main">Product Feature</a>
                        <ul className="submenu-third-lvl mm-collapse">
                          <li><a href="/shop-details-variable">Shop Details Variable</a></li>
                          <li><a href="/shop-details-affiliats">Shop Details Affiliats</a></li>
                          <li><a href="/shop-details-group">Shop Details Group</a></li>
                          <li><a href="/shop-compare">Shop Compare</a></li>
                        </ul>
                      </li>
                      <li className="has-droupdown third-lvl">
                        <a href="#" className="main">Shop Others</a>
                        <ul className="submenu-third-lvl mm-collapse">
                          <li><a href="/cart">Cart</a></li>
                          <li><a href="/checkout">Checkout</a></li>
                          <li><a href="/trackorder">Trackorder</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-droupdown">
                    <a href="#" className="main">Blog</a>
                    <ul className="submenu mm-collapse">
                      <li><a className="mobile-menu-link" href="/blog">Blog</a></li>
                      <li><a className="mobile-menu-link" href="/blog-list-left-sidebar">Blog Left Sidebar</a></li>
                      <li><a className="mobile-menu-link" href="/blog-list-right-sidebar">Blog List Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a className="main" href="/contact">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="button-area-main-wrapper-menuy-sidebar mt--50">
        <div className="contact-area">
          <div className="phone">
            <i className="fa-light fa-headset"></i>
            <a href="#">02345697871</a>
          </div>
          <div className="phone">
            <i className="fa-light fa-envelope"></i>
            <a href="#">02345697871</a>
          </div>
        </div>
        <div className="buton-area-bottom">
          <a href="/login" className="rts-btn btn-primary">Sign In</a>
          <a href="/register" className="rts-btn btn-primary">Sign Up</a>
        </div>
      </div>

      <div className="search-input-area">
        <div className="container">
          <div className="search-input-inner">
            <div className="input-div">
              <input
                id="searchInput1"
                className="search-input"
                type="text"
                placeholder="Search by keyword or #"
              />
              <button>
                <i className="far fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div id="close" className="search-close-icon">
          <i className="far fa-times"></i>
        </div>
      </div>
    </div>
  );
}
