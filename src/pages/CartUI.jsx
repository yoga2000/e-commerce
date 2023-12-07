import React from "react";
import { useNavigate } from "react-router-dom";

const CartUI = () => {
  const navigate = useNavigate();
  return (
    <div className="  bg-white w-full p-4 rounded-lg  shadow-lg ">
      <p className="text-lg sm:text-2xl mb-2   ">Shopping Cart</p>
      <div className="flex flex-col sm:flex-row  justify-between p-4 items-center border-slate-500 border-t-2">
        <p className="text-start  text-sm font-semibold sm:text-base">
          Your online store shopping cart is empty
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md "
        >
          shop for items
        </button>
      </div>
    </div>
  );
};

export default CartUI;
