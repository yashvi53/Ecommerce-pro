import React from 'react'
import CategoriesItem from './CategoriesItem'
import { CategoriesThings } from '../data'
import "./Categories.css"

const Categories = () => {
  return (
   <div className="category-container">
    {CategoriesThings.map((item)=>(
        <CategoriesItem item={item}/>
    ))}

   </div>
  )
}

export default Categories
