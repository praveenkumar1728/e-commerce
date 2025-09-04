import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cartItems,setCartItems}) => {
  
    const increaseQty = (item)=>{
      if(item.product.stock == item.qty){
        return
      }
      const updateItem = cartItems.map((i)=>{
        if (i.product._id == item.product._id) {
          i.qty++
        }
        return i 
      })
      setCartItems(updateItem)
    }
    const decreaseQty = (item)=>{
      if(item.qty > 1){
        const updateItem = cartItems.map((i)=>{
          if (i.product._id == item.product._id) {
            i.qty--
          }
          return i 
        })
        setCartItems(updateItem)
      }
      
    }


    const removeItem = (item)=>{
      const updateItem = cartItems.filter((i)=>i.product._id != item.product._id)
      setCartItems(updateItem)
    }

  return (
    <>
      {cartItems.length>0?
      <section>
      <div className="rts-cart-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row g-5">
            {/* Cart Items Area */}
            <div className="col-xl-9 col-12 order-2 order-xl-1">
              <div className="cart-area-main-wrapper">
                <div className="cart-top-area-note">
                  <p>
                    Add <span>₹ 990</span> to cart and get free shipping
                  </p>
                  <div className="bottom-content-deals mt--10">
                    <div className="single-progress-area-incard">
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          role="progressbar"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart List */}
              <div className="rts-cart-list-area">
                {/* Header */}
                <div className="single-cart-area-list head">
                  <div className="product-main">
                    <p>Products</p>
                  </div>
                  <div className="price">
                    <p>Price</p>
                  </div>
                  <div className="quantity">
                    <p>Quantity</p>
                  </div>
                  <div className="subtotal">
                    <p>SubTotal</p>
                  </div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item)=>(
                    <div className="single-cart-area-list main item-parent" key={item.product._id}>
                    <div className="product-main-cart">
                      <div className="close section-activation" onClick={()=>removeItem(item)}>
                        <i className="fa-regular fa-x"></i>
                      </div>
                      <div className="thumbnail">
                        <img alt={item.product.name} src={item.product.images?.[0]?.image} />
                      </div>
                      <Link to={`/product/${item.product._id}`}>
                        <div className="information">
                          <h6 className="title">
                            {item.product.name}
                          </h6>
                          <span>{item.product.category}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="price">
                      <p>₹ {item.product.price}</p>
                    </div>
                    <div className="quantity">
                      <div className="quantity-edit">
                        <input className="input" type="text" readOnly value={item.qty} />
                        <div className="button-wrapper-action">
                          <button className="button minus" onClick={()=>decreaseQty(item)}>
                            <i className="fa fa-chevron-down"></i>
                          </button>
                          <button className="button plus" onClick={()=>increaseQty(item)}>
                            <i className="fa fa-chevron-up" ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="subtotal">
                      <p> ₹ {item.product.price * item.qty}</p>
                    </div>
                    </div>
                ))}
                



                {/* Coupon + Clear */}
                <div className="bottom-cupon-code-cart-area">
                  <form>
                    <input type="text" placeholder="Coupon Code" />
                    <button type="submit" className="rts-btn btn-primary">
                      Apply Coupon
                    </button>
                  </form>
                  <button className="rts-btn btn-primary mr--50">
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Totals Sidebar */}
            <div className="col-xl-3 col-12 order-1 order-xl-2">
              <div className="cart-total-area-start-right">
                <h5 className="title">Cart Totals</h5>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <h6 className="price"> ₹ {cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)}</h6>
                </div>
                <div className="shipping">
                  <span>Shipping</span>
                  <ul>
                    <li>
                      <input type="radio" id="f-option" name="selector" />
                      <label htmlFor="f-option">COD</label>
                    </li>
                    <li>
                      <input type="radio" id="s-option" name="selector" />
                      <label htmlFor="s-option">UPI</label>
                    </li>
                    <li>
                      <input type="radio" id="t-option" name="selector" />
                      <label htmlFor="t-option">Razor Pay</label>
                    </li>
                    <li>
                      {/* <p>Shipping options will be updated during checkout</p> */}
                      <p className="bold">Calculate Shipping</p>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <div className="wrapper">
                    <span>Total</span>
                    <h6 className="price">₹ {cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)}</h6>
                  </div>
                  <div className="button-area">
                    <button className="rts-btn btn-primary">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>: <h2 className="e-cart">Your Cart is Empty</h2> }
    </>
  );
};

export default Cart;
