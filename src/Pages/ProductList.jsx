import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import "../styles/ProductList.css"
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {

    const location=useLocation();
    const category=location.pathname.split("/")[2];

    const [filter, setFilter] = useState({ color: '', size: '' })
    const [Sort,setSort]=useState("newest")
    const handleFilter=(e)=>{
      const { name, value } = e.target;
      setFilter({
        ...filter,
        [name]: value,
      });
    }
  
  return (
   <div className="productlist-container"  >
    <Navbar/>
    
    <div className="productlist"style={{background:"#e3eaea"}}>
    <h1>{category}</h1>
    <div className="filter-container">
     <div className="filter-1">
      <span className='filtertext'>Products Filter:</span>
      <select name="color" onChange={handleFilter} value={filter.color} >
        <option disabled >Color</option>
        <option>yellow</option>
        <option>white</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>black</option>
      </select>
      <select name="size" onChange={handleFilter} value={filter.size} >
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
     
      </div>
      <NewsLetter/>
      <Footer/>    

   </div>
  )
}

export default ProductList
