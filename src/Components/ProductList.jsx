import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiURL = `https://fakestoreapi.com/products/category/${props.value}`;
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("err fecthing data", err);
      });
  }, []);
  return (
    <div className=" pb-4  shadow-lg z-50 ">
      {/* listing card */}
      <div className=" text-lg marker:md:text-xl font-semibold uppercase  bg-white text-center text-purple-700 shadow-md py-2 lg:text-2xl">
        {props.value}
      </div>

      <div className=" flex-col  flex sm:flex-row sm:flex-wrap sm:flex lg:flex lg:flex-wrap  ">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
