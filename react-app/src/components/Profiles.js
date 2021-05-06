import React from 'react';
import { useSelector } from 'react-redux';
// import Profiles from './Profiles.js'
import './CSS/Profiles.css'



const Search = () => {

    const user = useSelector(state => state.session.user)
    const userType = user.isVendor

    return (
        <div id='profilesDiv'>
            <div id='searchDiv'>

            </div>
        </div>
    )

}

export default Search
