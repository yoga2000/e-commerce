import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Search, SearchOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { SetUserLogOutState, selectUserName } from "../feature/auth/userSlice";
import { auth } from "../firebase";

const logOut = async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(SetUserLogOutState());
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
const Header = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const success = await logOut(dispatch);

    if (success) {
      navigate("/", { replace: true }); // Navigate to home after successful logout
    } else {
      console.error("Logout failed");
    }
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md top-0 sticky z-50 w-full mb-6   ">
      <div className="container mx-auto flex  items-center justify-around">
        <Link
          to="/home"
          className="p-2 animation-bounce text-base rounded-lg duration-150 cursor-pointer text-white font-semibold  md:text-xl sm:text-lg hover:bg-indigo-500"
        >
          Online Store
        </Link>

        <div className="relative bg-white flex-intial text-xs sm:text-base  font-semibold font-sans rounded w-[200px] sm:w-[300px] lg:w-[500px] xl:w-[800px]   ">
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 ml-3 border  bg-transparent outline-none border-none w-full"
          />

          <div className="absolute bottom-[20%] right-0 pointer-events-none  px-2 ">
            <SearchOutlined />
          </div>
        </div>
        <div className="hidden md:flex items-center  cursor-pointer  space-x-4">
          <button
            onClick={handleLogout}
            className="text-white sm:text-lg p-2 rounded-lg duration-150 hover:bg-indigo-500 hover:scale-105 "
          >
            Signout
          </button>
          <Link
            to="/cart"
            className="text-white sm:text-lg items-center rounded-lg p-2 duration-150 flex space-x-1 hover:bg-indigo-500 hover:scale-105 "
          >
            <ShoppingCartIcon className="pointer-event-none" />
            <p>Cart</p>
            <p>{cartItem.length}</p>
          </Link>
        </div>
      </div>
      <div className="flex space-x-56 sm:hidden justify-center items-center">
        <Link
          to="/cart"
          className="text-white p-1 items-center rounded-lg duration-150 flex space-x-1 hover:bg-indigo-500 hover:scale-105 "
        >
          <ShoppingCartIcon className="pointer-event-none" />
          <p>Cart</p>
          <p>{cartItem.length}</p>
        </Link>

        <button
          onClick={handleLogout}
          className="text-white sm:text-lg p-1 rounded-lg duration-150 hover:bg-indigo-500 hover:scale-105 "
        >
          Signout
        </button>
      </div>
    </nav>
  );
};
export default Header;
