import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/Product.css";
import NewsLetter from "../Components/NewsLetter";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { addProduct} from "../redux/cartredux";
import { useDispatch } from "react-redux";

const ProductDetail = ({ item }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch();

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/product/products/" + id
      );
      setProduct(res.data[0]);
      console.log("response", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuantity=(type)=>{
   if(type==="dec"){
   quantity>1 && setQuantity(quantity-1)
   }
   else{
    setQuantity(quantity+1)
   }

  }
  const handleClick=()=>{
  dispatch(addProduct({...product,quantity}))
  
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="productmain-container">
      <Navbar />
      <div className="product-wrapper" style={{background:"#e3eaea"}}>
        <div className="img-container">
          <img src={product.image} alt="" />
        </div>
        <div className="info-container">
          <h1 className="productdetail-title">{product.title}</h1>
          <p className="desc">{product.description}</p>
          <p className="price">{product.price}</p>
          <div className="filter-container">
            <div className="filter-1">
              <select name="color">
                <option disabled>color</option>
                <option>{product.color}</option>
              </select>
            </div>
            <div className="filter-2">
              <select name="size">
                <option disabled selected>
                  Size
                </option>
                <option>{product.size}</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <span className="add" onClick={()=>handleQuantity("inc")}>
                <GrAdd />
              </span>
             <span>
              {quantity}
              </span>
             
              <span className="remove" onClick={()=>handleQuantity("dec")}>
                <IoMdRemove  />
              </span>
            </div>
          
              <button className="cart" onClick={handleClick}>Add To Cart</button>
          
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
