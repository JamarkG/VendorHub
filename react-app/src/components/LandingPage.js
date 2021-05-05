import React from 'react';
import { NavLink } from 'react-router-dom';
import background from './images/VendorHubBackground.png';
import './CSS/LandingPage.css';

const LandingPage = () => {

    return (
        <div>
            <div id='compHolderDiv'>
                <img src={background} id='imgHolder'></img>
                <div id='landingTextButton'>
                    <h3>Simplify your vendor discovery</h3>
                    <NavLink to="/login" style={{ textDecoration: 'none' }}>
                        <div id='tryButtonDiv'>
                            <p id='tryButtonP'>Try it free</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )

}

export default LandingPage
