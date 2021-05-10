import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import PublicProfile from './PublicProfile.js'
import './CSS/Search.css'


const Search = () => {

    const user = useSelector(state => state.session.user);
    // const userType = user.isVendor;
    const userId = user.id;

    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    // const [modalRendering, setModalRendering] = useState(false);

    // Modal.setAppElement('#root');

    // const setModalRenderingTrue = () => {
    //     setModalRendering(true)
    // };
    // const setModalRenderingFalse = () => {
    //     setModalRendering(false)
    // };

    let userCount = 0;

    useEffect(() => {
        if (!userId) {
            return
        }
        async function fetchData() {
            const response = await fetch(`/api/users/`);
            const profObj = await response.json();
            const userArr = profObj.users;
            userCount = userArr.length;
            console.log(userCount)
        //   console.log(userArr)
          setProfiles(userArr);
          setSearchResults(userArr);
        };
        fetchData();
    }, []);


    // const vendorBooltoString = (bool) => {
    //     if (bool){ return 'Vendor' }
    //     else { return 'Buyer' }
    // };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    };


    useEffect(() => {
        let results = profiles.filter(profile =>
            profile.name.toLowerCase().includes(searchTerm) ||
            profile.companyName.toLowerCase().includes(searchTerm) ||
            profile.summary.toLowerCase().includes(searchTerm)
        );

        setSearchResults(results);
    }, [searchTerm]);


    return (
        <div id='bodyDiv'>
            <div id='searchDiv'>
                <form action="/" method="get">
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="  Search the database"
                        id='searchInput'
                        onChange={handleSearchChange}
                    />
                    <button type="submit" id='searchButton'>Search</button>
                </form>
            </div>
            <div id='profilesDiv'>
            {searchResults.map((profile, i) => (  // removed index i as arg
                <PublicProfile oneProfile={profile} key={i} />
            ))}
            </div>
        </div>
    )

}

export default Search
