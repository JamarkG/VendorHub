import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './CSS/NavBar.css';
import logo from './images/VHLogo.png';

const NavBar = () => {

  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <div id='TopNavDiv'>
        <div id='LogoDiv'>
          <NavLink to="/" exact={true} activeClassName="active">
            <img border={0} alt="VendorHub Logo" src={logo} width="115" height="55" />
          </NavLink>
        </div>
        <div id='CenterSpacer'>
        </div>
        <div className='AuthDiv'>
          {!user &&
          <div className='AuthDiv'>
            <div className='AuthButton' id='LoginButtonDiv'>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </div>
            <div className='AuthButton' id='SignUpButtonDiv'>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </div>
          </div>}
          {user &&
          <div className='AuthDiv'>
            <div>
              <NavLink to='/my-profile' exact={true} activeClassName="active">
                My profile
              </NavLink>
            </div>
            <div className='AuthButton' id='LogoutButtonDiv'>
              <LogoutButton />
            </div>
          </div>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
