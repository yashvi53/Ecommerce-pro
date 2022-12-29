import React from "react";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
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
      <Route exact path="/products/:id" element={<ProductDetail/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
export default App;