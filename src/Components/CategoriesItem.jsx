import React from 'react'
import "./Categories.css"
import { Link } from 'react-router-dom'

const CategoriesItem = ({item}) => {
  return (
   <div className="categoryitem-container">
    <Link to={`/productlist/${item.category}`}>
     
    <img className='category-img' src={item.img} alt="" />
          <div className="info">
        <h4 className='category-title'>{item.title}</h4>
        <button>Shop Now</button>
        </div>
    </Link>
      
   </div>
  )
}

export default CategoriesItem
