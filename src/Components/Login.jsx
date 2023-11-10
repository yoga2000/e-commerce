import React from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { setActiveUser, selectUserName } from "../feature/auth/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Sign-in successful:", result.user.displayName);
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <>
      {userName ? (
        <Navigate to="/home" replace={true} />
      ) : (
        <div className="hero min-h-screen bg-gradient-to-br from-purple-500  via-fuchsia-500 to-indigo-500">
          <div className="hero-content text-center">
            <div className="max-w-sm sm:max-w-lg">
              <h1 className="text-3xl sm:text-5xl font-bold ">
                "ONLINE STORE!"
              </h1>
              <p className="py-6 font-bold">
                "Be the first to know about our latest products, special offers,
                and exclusive discounts! Sign up to get access and elevate your
                shopping experience today."
              </p>
              <button
                onClick={handleSignIn}
                className="btn btn-xs  sm:w-[375px] text-lg  font-bold btn-primary h-[70px] glass "
              >
                <img
                  className="w-16 h-16 object-contain "
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google icon"
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
