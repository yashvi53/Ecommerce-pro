import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import {
  Routes,
  Route,
  BrowserRouter} from "react-router-dom"
import ProductList from "./Pages/ProductList";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/productlist/:category" element={<ProductList/>}/>
      <Route exact path="/product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
export default App;