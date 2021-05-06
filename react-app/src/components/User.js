import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import LogoutButton from './auth/LogoutButton';
import './CSS/User.css'

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const userInfo = useSelector(state => state.session.user)

  const userId  = userInfo.id;

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div id='profileInfoDivTop'>
      <div className='profileInfoDiv'>
        <strong>User Id</strong> <p>{userId}</p>
      </div>
      <div className='profileInfoDiv'>
        <strong>Username</strong> <p>{user.username}</p>
      </div>
      <div className='profileInfoDiv'>
        <strong>Email</strong> <p>{user.email}</p>
      </div>
      <div className='AuthButton' id='LogoutButtonDiv'>
        <LogoutButton />
      </div>
    </div>
  );
}
export default User;
