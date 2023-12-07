import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../feature/cart/cartSlice";

const ProductPageUI = ({ data }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col mix-blend-multiply sm:flex-row">
        <img
          src={data.image}
          className="max-w-[250px]   lg:max-w-sm rounded-lg "
        />
        <div>
          <h1 className=" text-xl  lg:text-5xl font-bold">{data.title}</h1>
          <p className="py-6  text-sm lg:text-lg text-clip font-semibold ">
            {data.description}
          </p>
          <p className=" text-xl text-amber-500 sm:text-3xl font-bold pb-4">
            ${data.price}
          </p>

          <div className="flex space-x-4 sm:space-x-12">
            <button
              onClick={() => navigate("/home")}
              className="btn  btn-primary btn-sm lg:btn-lg"
            >
              Back to home
            </button>
            <button
              onClick={() => {
                dispatch(addItem(data));
                navigate("/cart");
              }}
              className="btn btn-primary btn-sm lg:btn-lg"
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
