import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  error,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  loading,
  product,
} from "../feature/Productpage/ProductSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductPageUI from "./ProductPageUI";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.product.details);
  const isLoading = useSelector((state) => state.product.loading);

  useEffect(() => {
    const fetchProductDetails = async () => {
      dispatch(getProductStart());
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        dispatch(getProductSuccess(response.data));
      } catch (error) {
        dispatch(getProductFailure(error.message));
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [dispatch, productId]);

  if (isLoading) {
    return <p>Loading...</p>; // Consider using a spinner or loading component
  }

  if (!productDetails || Object.keys(productDetails).length === 0) {
    return <p>No product details found.</p>; // Handle case when no product details are available
  }
  return (
    <div>
      <ProductPageUI data={productDetails} />
      {console.log(productDetails)}
    </div>
  );
};

export default ProductPage;
