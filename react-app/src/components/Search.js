import React from 'react';
import { useSelector } from 'react-redux';
import Profiles from './Profiles.js'
import './CSS/Search.css'



const Search = () => {

    const user = useSelector(state => state.session.user)
    const userType = user.isVendor

    return (
        <div id='modalHolder'>
            <div id='searchDiv'>
                <form action="/" method="get">
                    <input
                        type="text"
                        placeholder="  Search the database"
                        id='searchInput'
                    />
                    <button type="submit" id='searchButton'>Search</button>
                </form>
            </div>
            <Profiles />
        </div>
    )

}

export default Search
