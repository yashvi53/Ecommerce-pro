import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import "../styles/ProductList.css"
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductList = () => {

    const location=useLocation();
    const category=location.pathname.split("/")[2];

    const [filter, setFilter] = useState({})
    const [Sort,setSort]=useState("newest")
    const handlefilter=(e)=>{
        const value=e.target.value;
        setFilter({
            ...filter,
            [e.target.value]:value
        });
    }
  return (
   <div className="productlist-container">
    <Navbar/>
    <h1>{category}</h1>
    <div className="filter-container">
     <div className="filter-1">
      <span className='filtertext'>Products Filter:</span>
      <select name="color" onChange={handlefilter} >
        <option disabled >Color</option>
        <option>Yellow</option>
        <option>White</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Parot</option>
      </select>
      <select name="size" onChange={handlefilter} >
        <option disabled selected>Size</option>
        <option>34</option>
        <option>36</option>
        <option>50</option>
        <option>44</option>
        <option>32</option>
      </select>
     </div>
     <div className="filter-2">
     <span className='filtertext'>Sort By:</span>
      <select onChange={(e)=> setSort(e.target.value) }>
        <option value="newest">Newest</option>
        <option value="asc">Price(asc)</option>
        <option value="desc">Price(desc)</option>
      </select>
     </div>

    </div>
   
  
      <Products category={category} filter={filter} sort={Sort} />
     
     
      <NewsLetter/>
      <Footer/>    

   </div>
  )
}

export default ProductList
