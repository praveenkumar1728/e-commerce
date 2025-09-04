import React from "react";

const Wishlist = () => {
  return (
    <section>
      <div className="rts-cart-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-12 order-2 order-xl-1">
              <div className="cart-area-main-wrapper">
                <h3 className="mb-4">My Wishlist</h3>
              </div>

              {/* Wishlist List */}
              <div className="rts-cart-list-area">
                {/* Header */}
                <div className="single-cart-area-list head">
                  <div className="product-main">
                    <p>Products</p>
                  </div>
                  <div className="price">
                    <p>Price</p>
                  </div>
                  <div className="subtotal">
                    <p>Action</p>
                  </div>
                </div>

                {/* Wishlist Item 1 */}
                <div className="single-cart-area-list main item-parent">
                  <div className="product-main-cart">
                    <div className="close section-activation">
                      <i className="fa-regular fa-x"></i>
                    </div>
                    <div className="thumbnail">
                      <img alt="shop" src="/assets/images/grocery/16.jpg" />
                    </div>
                    <div className="information">
                      <h6 className="title">
                        Details Profitable business makes your profit
                      </h6>
                      <span>SKU:SKUZNFER</span>
                    </div>
                  </div>
                  <div className="price">
                    <p>$29.00</p>
                  </div>
                  <div className="button-area">
                    <a
                      href="#"
                      className="rts-btn btn-primary radious-sm with-icon"
                    >
                      <div className="btn-text">Add to Cart</div>
                      <div className="arrow-icon">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Wishlist Item 2 */}
                <div className="single-cart-area-list main item-parent">
                  <div className="product-main-cart">
                    <div className="close section-activation">
                      <i className="fa-regular fa-x"></i>
                    </div>
                    <div className="thumbnail">
                      <img alt="shop" src="/assets/images/grocery/21.jpg" />
                    </div>
                    <div className="information">
                      <h6 className="title">Netlyfy business makes your profit</h6>
                      <span>SKU:SKUZNFER</span>
                    </div>
                  </div>
                  <div className="price">
                    <p>$19.00</p>
                  </div>
                  <div className="button-area">
                    <a
                      href="#"
                      className="rts-btn btn-primary radious-sm with-icon"
                    >
                      <div className="btn-text">Add to Cart</div>
                      <div className="arrow-icon">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Clear Wishlist */}
                <div className="bottom-cupon-code-cart-area">
                  <button className="rts-btn btn-primary mr--50">
                    Clear Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
