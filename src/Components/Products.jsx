import React from 'react'
import "./Products.css"
import { NewArrivals } from '../data'
import Product from './Product'
const Products = () => {
  return (
  <div className="product-container">
    {NewArrivals.map((item)=>(
        <Product item={item} key={item.id} />
    ))}

  </div>
  )
}

export default Products
