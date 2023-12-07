import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              <ProductList value="men's clothing" />
              <ProductList value="women's clothing" />
              <ProductList value="jewelery" />
              <ProductList value="electronics" />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
