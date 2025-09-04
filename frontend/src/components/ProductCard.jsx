import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
    
    return (
        <div key={product._id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="single-shopping-card-one">
                <div className="image-and-action-area-wrapper">
                <Link to={`/product/${product._id}`} className="thumbnail-preview">
                    <div className="badge">
                    <span>25% <br/>off</span>
                    <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <img
                    src={product.images[0]?.image}
                    alt={product.name}
                    />
                </Link>    
                <div className="action-share-option">
                    <span className="single-action openuptip" title="Add To Wishlist">
                    <i className="fa fa-heart"></i>
                    </span>
                    <span className="single-action openuptip" title="Quick View">
                    <i className="fa-regular fa-eye"></i>
                    </span>
                </div>
                </div>
                <div className="body-content">
                <h4 className="title">{product.name}</h4>
                <span className="availability">{product.category} | Stock: {product.stock}</span>
                <div className="price-area">
                    <span className="current">₹ {Number(product.price).toFixed(2)}</span>
                    {/* <div className="previous">₹36.00</div> */}
                </div>
                <div className="cart-counter-action">
                    <div className="quantity-edit">
                    <input className="input" type="text" value="1" readOnly />
                    <div className="button-wrapper-action">
                        <button className="button minus">
                        <i className="fa fa-angle-down"></i>
                        </button>
                        <button className="button plus">
                        <i className="fa fa-angle-up"></i>
                        </button>
                    </div>
                    </div>
                    <a
                    href="#"
                    className="rts-btn btn-primary add-to-card radious-sm with-icon"
                    >
                    <div className="btn-text">Add</div>
                    <div className="arrow-icon">
                        <i className="fa fa-cart-shopping"></i>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard