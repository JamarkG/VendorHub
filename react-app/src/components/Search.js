import React from 'react';
import { useSelector } from 'react-redux';
import './CSS/Search.css'



const Search = () => {

    const user = useSelector(state => state.session.user)
    const userType = user.isVendor

    return (
        <div id='modalHolder'>
            <div id='searchDiv'>
                <form action="/" method="get" id='searchForm'>
                    <input
                        type="text"
                        placeholder="Search the database"
                    />
                    <button type="submit">Search</button>
                </form>

            </div>
        </div>
    )

}

export default Search
