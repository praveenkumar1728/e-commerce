import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = ({cartItems,setCartItems}) => {
  const [activeTab, setActiveTab] = useState("details");
  const [product, setProduct] = useState(null);
  const [qty,setQty] = useState(1)
  
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.product); //  set the product
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id, apiUrl]);

  const addToCart = ()=>{
    const exists = cartItems.find((item)=> item.product._id == product._id)
    if (!exists) {
      const newItem = {product,qty}
      setCartItems((prev)=> [...prev,newItem])
      toast.success("Cart Item Added Successfully!");
    }
    
  }

  const increaseQty = ()=>{
    if(product.stock == qty){
      return
    }
    setQty((prev)=>prev+1)
  }
  const decreaseQty = ()=>{
    if(qty <= 1){
      return
    }
    setQty((prev)=>prev-1)
  }
  

  if (!product) {
    return <p>Loading...</p>; // fallback UI
  }

  return (
    <section>
      <div className="rts-chop-details-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="shopdetails-style-1-wrapper">
            <div className="row g-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                {/* Product main section */}
                <div className="product-details-popup-wrapper in-shopdetails">
                  <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                    <div className="product-details-popup">
                      <div className="details-product-area">
                        {/* Product images */}
                        <div className="product-thumb-area">
                          <div className="cursor"></div>
                          <div className="thumb-wrapper one filterd-items figure">
                            <div className="product-thumb">
                              <img
                                src={product.images?.[0]?.image}
                                alt={product.name}
                              />
                            </div>
                          </div>
                          <div className="product-thumb-filter-group">
                            {product.images?.map((img, idx) => (
                              <div
                                key={idx}
                                className={`thumb-filter filter-btn${idx === 0 ? " active" : ""}`}
                                style={{ cursor: "pointer" }}
                              >
                                <img src={img.image} alt="product-thumb-filter" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Product details */}
                        <div className="contents">
                          <div className="product-status">
                            <span className="product-catagory">{product.category}</span>
                            <div className="rating-stars-group">
                              <span>{product.ratings} ★</span>
                            </div>
                          </div>
                          <h2 className="product-title">{product.name}</h2>
                          <p className="mt--20 mb--20">{product.description}</p>
                          <div className="pd-price">
                            <span
                              className="product-price d-block"
                              style={{ color: "#DC2626", fontWeight: 600 }}
                            >
                              ₹{product.price}
                            </span>
                            <div className="p-status">
                                Status : 
                                <span className={product.stock > 0 ? "text-success" : "text-danger"}>
                                    {product.stock > 0 ? "In Stock" : "Out Stock"}
                                </span>
                            </div>
                          </div>
                          <div className="product-bottom-action">
                            <div className="quantity-edit-d">
                                <input className="input" readOnly type="text" value={qty} />
                                <div className="button-wrapper-action-d">
                                    <button className="button minus-d" onClick={decreaseQty} >
                                    <i className="fa fa-angle-down"></i>
                                    </button>
                                    <button className="button plus-d" onClick={increaseQty}>
                                    <i className="fa fa-angle-up"></i>
                                    </button>
                                </div>
                              </div>
                            <button
                                  className="rts-btn btn-primary radious-sm with-icon"
                                  disabled={!product || Number(product.stock == 0)}
                                  onClick={addToCart}
                                >
                                  <div className="btn-text">Add to Cart</div>
                                  <div className="arrow-icon">
                                    <i className="fa fa-cart-shopping"></i>
                                  </div>
                                </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="product-discription-tab-shop mt--50">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "details" ? "active" : ""}`}
                        onClick={() => setActiveTab("details")}
                      >
                        Product Details
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "info" ? "active" : ""}`}
                        onClick={() => setActiveTab("info")}
                      >
                        Additional Information
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {activeTab === "details" && (
                      <div>
                        <p>{product.description}</p>
                      </div>
                    )}
                    {activeTab === "info" && (
                      <div>
                        <ul>
                          <li>Seller: {product.seller}</li>
                          <li>Stock: {product.stock}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1 rts-sticky-column-item">
                <div className="theiaStickySidebar">
                  <div className="shop-sight-sticky-sidevbar mb--20">
                    <h6 className="title">Available offers</h6>
                    <p>Get 5% off on first order!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
