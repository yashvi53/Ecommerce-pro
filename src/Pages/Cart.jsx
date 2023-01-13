import React,{useState} from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/Cart.css";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

import { useSelector } from "react-redux";
const Cart = () => {
  const cart=useSelector(state=>state.cart);
  const [quantity, setQuantity] = useState(cart.quantity)
 

  const handleQuantity=(type)=>{
    if(type=="dec"){
      setQuantity(quantity-1)
    }
    else{
      setQuantity(quantity+1)
    }
  }

  return (
    <div className="cart-container">

      <Navbar />
      <div className="Wrapper">
        <h1 className="cart-title">Your Basket</h1>
        <div className="top">
          <button className="top-btn">Continue Shopping</button>
          <div className="top-texts">
            <span className="toptext">Shopping Bag</span>
            <span className="toptext">Wishlist</span>
          </div>
          <button type="filled" className="top-btn">
            Checkout
          </button>
        </div>
        <div className="bottom">
          <div className="cart-info">
            {
              cart.products.map(product=>(
            <div className="cart-product">
              <div className="product-details">
                <img
                  src={product.image}
                  alt=""
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b> {product.title}
                  </span>
                  <span className="productId">
                    <b>ID:</b>{product.id}
                  </span>
                  <div className="product-color">
                    {/* {product.color} */}
                  </div>
                  <span className="product-size">
                    <b>Size:</b> {product.size}
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amountcontainer">
                  <span className="add" onClick={()=>{handleQuantity("inc")}}>
                    <GrAdd />
                  </span>
                  <span>{product.quantity}</span>
                  <span className="remove" onClick={()=>{handleQuantity("dec")}}>
                    <IoMdRemove />
                  </span>
                </div>
                <div className="total-amount">{product.price*product.quantity}</div>
              </div>
            </div>
            )) }
            <hr className="line"/>
          
          </div>
          <div className="summary">
           <h1 className="summary-title">Order Details</h1>
            <div className="summaryitem">
                <span className="summary-text">SubTotal</span>
                <span className="summary-price">{cart.total}</span>
            </div>
            <div className="summaryitem">
                <span className="summary-text">Shipping Price</span>
                <span className="summary-price">70</span>
            </div>
            <div className="summaryitem">
                <span className="summary-text">cart discount</span>
                <span className="summary-price">10</span>
            </div>
            <div className="summaryitem">
                <span className="summary-text">FinalTotal</span>
                <span className="summary-price">{cart.total}</span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
