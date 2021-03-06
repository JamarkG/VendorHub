import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import '../CSS/LogoutButton.css';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button onClick={onLogout} id='logoutButton'>Logout</button>;
};

export default LogoutButton;
