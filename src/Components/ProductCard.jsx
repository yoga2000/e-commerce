// ProductCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../feature/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent default behavior (link navigation)
    dispatch(addItem(data)); // Add the item to the cart
  };

  return (
    <>
      <div className=" w-[75%] bg-white mt-5 mx-auto rounded-lg shadow-lg  duration-150 transition-transform transform hover:scale-105 overflow-hidden sm:w-[40%] sm:flex-wrap lg:w-[23%] lg:min-w-3/4">
        <Link to={`/product/${data.id}`}>
          <img
            src={data.image}
            alt={data.title}
            className="  w-[120px] h-[120px] object-contain items-center mx-auto "
          />
          <div className="p-4 ">
            <h2 className="text-sm md:text-md font-semibold text-center truncate">
              {data.title}
            </h2>
            {/* <p className="text-sm md:text-base font-light  text-slate-600 truncate">
            {data.description}
          </p> */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-md md:text-lg font-semibold  text-[#ff6d00]">
                ${data.price}
              </span>
              <button
                className="bg-blue-500 duration-150 p-2 rounded-lg hover:bg-blue-700 text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
