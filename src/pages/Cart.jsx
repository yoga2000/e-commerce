import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartTotal } from "../feature/cart/cartSlice";
import CartUI from "./CartUI";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <div className="max-w-xs sm:max-w-xl mx-auto text-center rounded-full p-4 my-4 ">
        {cartItems.length === 0 ? (
          <CartUI />
        ) : (
          <div className=" bg-white rounded-md   text-slate-500 p-4 flex items-center justify-between text-md sm:text-lg font-sans  font-bold lg:text-2xl">
            <h2 className="">Cart Items: {cartItems.length}</h2>
            <h2 className="text-fuchsia-700"> SubTotal: {cartTotal}$</h2>
          </div>
        )}
      </div>
      <div className=" mx-auto max-w-md   sm:max-w-3xl  lg:max-w-6xl">
        {cartItems.map((item) => (
          <>
            <div
              key={item.id}
              className="flex flex-wrap   bg-white p-4 justify-evenly  items-center mb-4"
            >
              <img
                src={item.image}
                className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain"
              />
              <span className=" break-words truncate  text-xs font-serif sm:text-lg">
                {item.title}
              </span>
              <span className=" text-md  font-bold sm:text-lg">
                ${item.price}
              </span>
              <span className=" text-md  font-bold sm:text-lg">
                Qty: {item.quantity}
              </span>
              <button
                className="bg-red-500 text-xs sm:text-lg text-white p-2 rounded-md"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cart;
