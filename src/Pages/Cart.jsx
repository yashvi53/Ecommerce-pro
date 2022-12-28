import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/Cart.css";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

const Cart = () => {
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
            <div className="cart-product">
              <div className="product-details">
                <img
                  src="http://www.pngimagesfree.com/People/Lengha/Thumb/lengha-model.png"
                  alt=""
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b> Ethnic Lengha
                  </span>
                  <span className="productId">
                    <b>ID:</b> 8498437
                  </span>
                  <div className="product-color"></div>
                  <span className="product-size">
                    <b>Size:</b> 38
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amountcontainer">
                  <span className="add">
                    <GrAdd />
                  </span>
                  <input type="text" className="amount" />
                  <span className="remove">
                    <IoMdRemove />
                  </span>
                </div>
                <div className="total-amount">3000</div>
              </div>
            </div>
            <hr className="line"/>
            <div className="cart-product">
              <div className="product-details">
                <img
                  src="http://www.pngimagesfree.com/People/Lengha/Thumb/lengha-model.png"
                  alt=""
                />
                <div className="details">
                  <span className="product-name">
                    <b>Product:</b> Ethnic Lengha
                  </span>
                  <span className="productId">
                    <b>ID:</b> 8498437
                  </span>
                  <div className="product-color"></div>
                  <span className="product-size">
                    <b>Size:</b> 38
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amountcontainer">
                  <span className="add">
                    <GrAdd />
                  </span>
                  <input type="text" className="amount" />
                  <span className="remove">
                    <IoMdRemove />
                  </span>
                </div>
                <div className="total-amount">3000</div>
              </div>
            </div>
          </div>
          <div className="summary">
           <h1 className="summary-title">Order Details</h1>
            <div className="summaryitem">
                <span className="summary-text">SubTotal</span>
                <span className="summary-price">890</span>
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
                <span className="summary-price">950</span>
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
