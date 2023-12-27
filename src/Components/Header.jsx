import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({ value, inputChange }) => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-gray-800 h-[80px] flex items-center    shadow-md top-0 sticky z-50 w-full mb-6   ">
      <div className="container max-w-md  flex sm:max-w-7xl mx-auto items-center justify-between">
        <Link
          to="/"
          className="p-2  text-base rounded-lg duration-150 cursor-pointer text-white font-semibold  md:text-xl sm:text-lg hover:bg-indigo-500"
        >
          Online Store
        </Link>
        <div className=" hidden lg:flex w-full items-center  shadow-lg max-w-2xl mx-auto mb-4 sticky">
          <input
            type="text"
            placeholder="search..."
            value={value}
            onChange={(e) => inputChange(e.target.value)}
            className="p-2 w-full rounded-md text-black"
          />
          <SearchIcon className=" right-0 mr-4 absolute" />
        </div>
        <Link
          to="/cart"
          className="text-white sm:text-lg items-center rounded-lg p-2 duration-150 flex space-x-1 hover:bg-indigo-500 hover:scale-105 "
        >
          <ShoppingCartIcon className="pointer-event-none" />
          <p>Cart</p>
          <p>{cartItem.length}</p>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
