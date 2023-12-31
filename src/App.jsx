import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const inputChange = (query) => {
    setSearchTerm(query);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header inputChange={inputChange} value={searchTerm} />
              <ProductList value="men's clothing" searchQuery={searchTerm} />
              <ProductList value="women's clothing" searchQuery={searchTerm} />
              <ProductList value="jewelery" searchQuery={searchTerm} />
              <ProductList value="electronics" searchQuery={searchTerm} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header inputChange={inputChange} value={searchTerm} />
            </>
          }
        />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
