import React from 'react'
import "./Products.css"
import {BiSearchAlt2} from "react-icons/bi"
import {BsCartFill} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className="productitem-container">
        <div className="circle">

        </div>
        <img className='product-img' src={item.img} alt="" />
        <div className="product-info">
           <span className="cart-icon">
            <BsCartFill/>
           </span>
           <span className="search-icon">
           <Link to={`/products/${item.id}`}>
            <BiSearchAlt2/>
            </Link>
           </span>
           <span className="wishlist-icon">
            <AiFillHeart/>
           </span>
        </div>
        

    </div>
  )
}

export default Product
