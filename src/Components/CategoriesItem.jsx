import React from 'react'
import "./Categories.css"

const CategoriesItem = ({item}) => {
  return (
   <div className="categoryitem-container">
    
    <img className='category-img' src={item.img} alt="" />
          <div className="info">
        <h4 className='category-title'>{item.title}</h4>
        <button>Shop Now</button>
        </div>
    
   </div>
  )
}

export default CategoriesItem
