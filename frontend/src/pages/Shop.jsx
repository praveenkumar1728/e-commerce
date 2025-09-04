import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const products = [
    {
      id: 1,
      link: "/shop/details-profitable-business-makes-your-profit",
      badge: "25% Off",
      img: "/assets/images/grocery/16.jpg",
      title: "Details Profitable business makes your profit",
      availability: "500g Pack",
      currentPrice: "$29.00",
      previousPrice: "$36.00",
    },
    {
      id: 2,
      link: "/shop/me-profitable-business-makes-your-profit",
      badge: "25% Off",
      img: "/assets/images/grocery/18.jpg",
      title: "Me Profitable business makes your profit",
      availability: "500g Pack",
      currentPrice: "$78.00",
      previousPrice: "$36.00",
    },
    {
      id: 3,
      link: "/shop/details-business-makes-your-profit",
      badge: "25% Off",
      img: "/assets/images/grocery/19.jpg",
      title: "Details business makes your profit",
      availability: "500g Pack",
      currentPrice: "$90.00",
      previousPrice: "$36.00",
    },
    {
      id: 4,
      link: "/shop/firebase-business-makes-your-profit",
      badge: "25% Off",
      img: "/assets/images/grocery/20.jpg",
      title: "Firebase business makes your profit",
      availability: "500g Pack",
      currentPrice: "$50.00",
      previousPrice: "$36.00",
    },
    {
      id: 5,
      link: "/shop/netlyfy-business-makes-your-profit",
      badge: "25% Off",
      img: "/assets/images/grocery/21.jpg",
      title: "Netlyfy business makes your profit",
      availability: "500g Pack",
      currentPrice: "$19.00",
      previousPrice: "$36.00",
    },
  ];

  // Custom style to simulate 5 column layout with Bootstrap-like classes
  const productColumnStyle = {
    flex: "0 0 20%",
    maxWidth: "20%",
  };

  return (
    <section className="shop-grid-sidebar-area rts-section-gap">
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-3 col-lg-12 pr--70 pr_lg--10 pr_sm--10 pr_md--5 rts-sticky-column-item">
            <div className="sidebar-filter-main theiaStickySidebar">
              {/* Sidebar Price Filter */}
              <div className="single-filter-box">
                <h5 className="title">Widget Price Filter</h5>
                <div className="filterbox-body">
                  <form action="#" className="price-input-area">
                    <div className="half-input-wrapper">
                      <div className="single">
                        <label htmlFor="min">Min price</label>
                        <input id="min" min="0" type="number" defaultValue="0" />
                      </div>
                      <div className="single">
                        <label htmlFor="max">Max price</label>
                        <input id="max" min="0" type="number" defaultValue="150" />
                      </div>
                    </div>
                    <input className="range" min="0" max="150" type="range" defaultValue="150" />
                    <div className="filter-value-min-max">
                      <span>Price: $0 — $150</span>
                      <button type="submit" className="rts-btn btn-primary">Filter</button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Product Categories */}
              <div className="single-filter-box">
                <h5 className="title">Product Categories</h5>
                <div className="filterbox-body">
                  <div className="category-wrapper">
                    <div className="single-category">
                      <input id="cat1" type="checkbox" />
                      <label htmlFor="cat1">Beverages</label>
                    </div>
                    <div className="single-category">
                      <input id="cat2" type="checkbox" />
                      <label htmlFor="cat2">Biscuits &amp; Snacks</label>
                    </div>
                    <div className="single-category">
                      <input id="cat3" type="checkbox" />
                      <label htmlFor="cat3">Breads &amp; Bakery</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Select Brands */}
              <div className="single-filter-box">
                <h5 className="title">Select Brands</h5>
                <div className="filterbox-body">
                  <div className="category-wrapper">
                    {["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"].map((brand, idx) => (
                      <div className="single-category" key={idx}>
                        <input id={`brand${idx + 1}`} type="checkbox" />
                        <label htmlFor={`brand${idx + 1}`}>{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-xl-9 col-lg-12">
            <div className="filter-select-area">
              <div className="top-filter">
                <span>Showing {products.length} results</span>
                <div className="right-end">
                  <span>Sort: Short By Latest</span>
                  <div className="button-tab-area">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link single-button active" type="button">
                          {/* Grid Icon SVG */}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28" />
                            <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28" />
                            <rect x="9.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28" />
                            <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28" />
                          </svg>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link single-button" type="button">
                          {/* List Icon SVG */}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3C28" />
                            <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3C28" />
                            <rect x="9" y="3" width="7" height="1" fill="#2C3C28" />
                            <rect x="9" y="12" width="7" height="1" fill="#2C3C28" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content" id="myTabContent">
              <div className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active">
                <div className="row g-4">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-6 col-sm-6 col-12" style={productColumnStyle}>
                      <div className="single-shopping-card-one">
                        <div className="image-and-action-area-wrapper">
                          <Link to={product.link} className="thumbnail-preview">
                            <div className="badge">
                              <span>{product.badge.split(" ")[0]}% <br />Off</span>
                              <i className="fa-solid fa-bookmark"></i>
                            </div>
                            <img alt="grocery" src={product.img} />
                          </Link>
                          <div className="action-share-option">
                            <span className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                              <i className="fa-light fa-heart"></i>
                            </span>
                            <span className="single-action openuptip" data-flow="up" title="Compare">
                              <i className="fa-solid fa-arrows-retweet"></i>
                            </span>
                            <span className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                              <i className="fa-regular fa-eye"></i>
                            </span>
                          </div>
                        </div>
                        <div className="body-content">
                          <Link to={product.link}>
                            <h4 className="title">{product.title}</h4>
                          </Link>
                          <span className="availability">{product.availability}</span>
                          <div className="price-area">
                            <span className="current">{product.currentPrice}</span>
                            <div className="previous">{product.previousPrice}</div>
                          </div>
                          <div className="cart-counter-action">
                            <div className="quantity-edit">
                              <input className="input" type="text" defaultValue="1" />
                              <div className="button-wrapper-action">
                                <button className="button minus"><i className="fa-regular fa-chevron-down"></i></button>
                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                              </div>
                            </div>
                            <a href="#" className="rts-btn btn-primary radious-sm with-icon add-to-cart">
                              <div className="btn-text">Add</div>
                              <div className="arrow-icon"><i className="fa-regular fa-cart-shopping"></i></div>
                              <div className="arrow-icon"><i className="fa-regular fa-cart-shopping"></i></div>
                            </a>
                          </div>
                        </div>
                        <div className="modal-compare-area-start"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Additional tab panes if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
