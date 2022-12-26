import React from 'react'
import "./Products.css"
import { NewArrivals } from '../data'
import Product from './Product'
import { Link } from 'react-router-dom'
const Products = ({category,filter,sort}) => {
 
  return (
    <Link to="/product">
  <div className="product-container">
   
    
    {NewArrivals.map((item)=>(
        <Product item={item} key={item.id} />
    ))}

  </div>
  </Link>
  )
}

export default Products
