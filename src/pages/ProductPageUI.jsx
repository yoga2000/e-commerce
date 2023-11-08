import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../feature/cart/cartSlice";

const ProductPageUI = ({ data }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{data.title}</h1>
          <p className="py-6">{data.description}</p>
          <p className=" text-amber-500 text-3xl pb-4">${data.price}</p>

          <div className="flex space-x-12">
            <button
              onClick={() => navigate("/home")}
              className="btn btn-primary"
            >
              Back to home
            </button>
            <button
              onClick={() => {
                dispatch(addItem(data));
                navigate("/cart");
              }}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageUI;
