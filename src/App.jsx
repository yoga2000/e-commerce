import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Login />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <ProductList value="jewelery" />
                <ProductList value="men's clothing" />
                <ProductList value="women's clothing" />
                <ProductList value="electronics" />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
