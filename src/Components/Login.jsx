import React from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  SetUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "../feature/auth/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleSignIn = () => {
    auth.signInWthPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  return (
    <div className="m-auto">
      <button onClick={handleSignIn}>SignIN with Google</button>
    </div>
  );
};

export default Login;
