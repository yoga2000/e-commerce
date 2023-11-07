import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./Components/Login";
import { selectUserName } from "./feature/auth/userSlice";
import { useSelector } from "react-redux";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <ProductList value="jewelery" />
              <ProductList value="men's clothing" />
              <ProductList value="women's clothing" />
              <ProductList value="electronics" />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
