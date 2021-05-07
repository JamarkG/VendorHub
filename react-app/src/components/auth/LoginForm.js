import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import '../CSS/LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(emailAddress, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
      <form onSubmit={onLogin} id='loginForm'>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='inputDiv'>
          <label htmlFor="email">Email</label>
          <input
            name="emailAddress"
            type="text"
            placeholder="Email"
            value={emailAddress}
            onChange={updateEmailAddress}
            className='textInput'
          />
        </div>
        <div className='inputDiv'>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className='textInput'
          />
        <button type="submit" id='loginButton'>Login</button>
        </div>
      </form>
  );
};

export default LoginForm;
