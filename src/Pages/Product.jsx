import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/Product.css";
import NewsLetter from "../Components/NewsLetter";
import {GrAdd} from "react-icons/gr"
import {IoMdRemove} from "react-icons/io"

const Product = () => {
  return (
    <div className="productmain-container">
      <Navbar />
      <div className="product-wrapper">
        <div className="img-container">
          <img
            src="https://m.media-amazon.com/images/I/81itPRPp66L._UL1500_.jpg"
            alt=""
          />
        </div>
        <div className="info-container">
          <h1 className="title">Denim jacket</h1>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            vitae reiciendis ut minima adipisci cumque non nisi culpa, enim
            optio reprehenderit minus dolores odit aperiam, et itaque ea, atque
            veniam.
          </p>
          <p className="price">R 5000</p>
          <div className="filter-container">
            <div className="filter-1">
              <select name="color">
                <option disabled>Color</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
              </select>
            </div>
            <div className="filter-2">
              <select name="size">
                <option disabled selected>
                  Size
                </option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <span className="add">
               <GrAdd/> 
              </span>
              <input type="text" className="amount" />
              <span className="remove">
                <IoMdRemove/>
              </span>
           
            </div>
            <button className="cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
