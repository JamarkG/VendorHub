import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginForm from "./auth/LoginForm";
import LogoutButton from './auth/LogoutButton';
import User from "./User";
import './CSS/NavBar.css';
import logo from './images/VHLogo.png';

const NavBar = () => {

  const user = useSelector(state => state.session.user)

  const [loginModalRendering, setLoginModalRendering] = useState(false);
  const [myProfileModalRendering, setMyProfileModalRendering] = useState(false);

  const setMyProfileModalRenderingTrue = () => {
    setMyProfileModalRendering(true)
  }

  const setMyProfileModalRenderingFalse = () => {
    setMyProfileModalRendering(false)
  }

  const setLoginModalRenderingTrue = () => {
      setLoginModalRendering(true)
  };
  const setLoginModalRenderingFalse = () => {
      setLoginModalRendering(false)
  };

  return (
    <nav>
      <div id='TopNavDiv'>
        <div id='LogoDiv'>
          <NavLink to="/" exact={true} activeClassName="active">
            <img border={0} alt="VendorHub Logo" src={logo} width="175" height="55" />
          </NavLink>
        </div>
        <div id='CenterSpacer'>
        </div>
        {!user &&
        <div className='AuthDiv'>
          <div className='AuthButton'>
            <button onClick={setLoginModalRenderingTrue} style={{ textDecoration: 'none' }} id='LoginLink'>
              Login
            </button>
            <Modal isOpen={loginModalRendering} parentSelector={() => document.querySelector('#modalHolder')}>
                <button onClick={setLoginModalRenderingFalse}>Close</button>
                <LoginForm />
            </Modal>
          </div>
        </div>}
        {user &&
        <div className='AuthDiv'>
          <div>
            <button onClick={setMyProfileModalRenderingTrue} style={{ textDecoration: 'none' }}>
              My profile
            </button>
            <Modal isOpen={myProfileModalRendering} parentSelector={() => document.querySelector('#modalHolder')}>
                <button onClick={setMyProfileModalRenderingFalse}>Close</button>
                <User />
            </Modal>
          </div>
          <div className='AuthButton' id='LogoutButtonDiv'>
            <LogoutButton />
          </div>
        </div>}
      </div>
    </nav>
  );
}

export default NavBar;
