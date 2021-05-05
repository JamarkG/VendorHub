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
            <img border={0} alt="VendorHub Logo" src={logo} width="175" height="55" />
          </NavLink>
        </div>
        <div id='CenterSpacer'>
        </div>
        {!user &&
        <div className='AuthDiv'>
          <div className='AuthButton'>
            <NavLink to="/login" exact={true} activeClassName="active" style={{ textDecoration: 'none' }} id='LoginLink'>
              Login
            </NavLink>
          </div>
          <div className='AuthButton'>
            <NavLink to="/sign-up" exact={true} activeClassName="active" style={{ textDecoration: 'none' }} id='SignUpLink'>
              Sign Up
            </NavLink>
          </div>
        </div>}
        {user &&
        <div className='AuthDiv'>
          <div>
            <NavLink to='/my-profile' exact={true} activeClassName="active" style={{ textDecoration: 'none' }}>
              My profile
            </NavLink>
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
