import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartTotal,
} from "../feature/cart/cartSlice";
import CartUI from "./CartUI";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
          <div className=" bg-white rounded-md  text-black  p-4 flex items-center justify-between text-md sm:text-lg font-sans  font-bold lg:text-2xl">
            <span>Cart Items: {cartItems.length}</span>
            <h2> SubTotal: {cartTotal}$</h2>
          </div>
        )}
      </div>
      <div className=" mx-auto max-w-md    sm:max-w-3xl  lg:max-w-6xl">
        {cartItems.map((item) => (
          <>
            <div
              key={item.id}
              className="flex items-center justify-evenly flex-wrap  bg-white p-4  mb-4"
            >
              <img
                src={item.image}
                className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain"
              />
              <span className="  truncate  text-xs font-serif sm:text-lg">
                {item.title}
              </span>

              <button
                className="bg-red-500 text-xs sm:text-lg text-white p-2 rounded-md"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>

              <div className="mt-3 flex w-full items-center justify-center space-x-6  ">
                <span className=" text-md text-amber-500  font-bold sm:text-lg">
                  <span className="text-black">Price:</span> ${item.price}
                </span>

                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="btn btn-xs sm:btn-sm  btn-square btn-outline"
                >
                  <AddIcon />
                </button>
                <span className=" text-md text-black  font-bold sm:text-xl">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="btn btn-xs sm:btn-sm  btn-square btn-outline"
                >
                  <RemoveIcon />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cart;
