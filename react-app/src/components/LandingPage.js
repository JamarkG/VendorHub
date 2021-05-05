import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import SignUpForm from "./auth/SignUpForm";
import background from './images/VendorHubBackground.png';
import './CSS/LandingPage.css';

const LandingPage = () => {

    const [modalRendering, setModalRendering] = useState(false);

    const setModalRenderingTrue = () => {
        setModalRendering(true)
    };
    const setModalRenderingFalse = () => {
        setModalRendering(false)
    };

    return (
        <div id='modalHolder'>
            <div id='compHolderDiv'>
                <img src={background} id='imgHolder'></img>
                <div id='landingTextButton'>
                    <h3>Simplify your vendor discovery</h3>
                    <div>
                        <button onClick={setModalRenderingTrue} style={{ textDecoration: 'none' }} id='tryButton'>
                            <p id='tryButtonP'>Try it free</p>
                        </button>
                        <Modal isOpen={modalRendering} parentSelector={() => document.querySelector('#modalHolder')}>
                            <button onClick={setModalRenderingFalse}>Close</button>
                            <SignUpForm />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LandingPage
