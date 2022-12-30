import React from "react";
import "./Products.css";
import { NewArrivals } from "../data";
import Product from "./Product";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Products = ({ category, filter, sort, item }) => {
  const [result, setResult] = useState(NewArrivals);

  const filterResult = (item) => {
    const res = NewArrivals.filter((curdate) => {
      return curdate.category == category;
    });
    setResult(res);
  };
  useEffect(() => {
    filterResult();
  }, []);

  return (
    <div className="product-container">
      {result.map((item) => (
        <Link to={`/products/${item.id}`}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
