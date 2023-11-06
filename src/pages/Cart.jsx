import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../feature/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="max-w-xs sm:max-w-lg mx-auto text-center rounded-full p-4 mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {cartItems.length === 0 ? (
          <h2 className="text-md sm:text-lg font-sans  text-white  font-bold lg:text-2xl">
            Your Cart is empty
          </h2>
        ) : (
          <div className="flex items-center justify-evenly text-md sm:text-lg font-sans  text-white  font-bold lg:text-2xl">
            <h2 className="">Cart Items</h2>
            <h2>Subtotal $66</h2>
          </div>
        )}
      </div>
      <div className=" mx-auto max-w-md sm:max-w-lg  lg:max-w-3xl">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex bg-white p-4 justify-between items-center mb-4"
          >
            <img
              src={item.image}
              className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain"
            />
            <span className="  truncate text-xs font-serif sm:text-lg">
              {item.title}
            </span>
            <span className=" text-md  font-bold sm:text-lg">
              ${item.price}
            </span>
            <button
              className="bg-red-500 text-xs sm:text-lg text-white p-2 rounded-md"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
