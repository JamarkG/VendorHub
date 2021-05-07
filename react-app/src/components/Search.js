import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import MeetingForm from './MeetingForm.js'
import './CSS/Search.css'


const Search = () => {

    const user = useSelector(state => state.session.user);
    // const userType = user.isVendor;
    const userId = user.id;

    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [modalRendering, setModalRendering] = useState(false);

    Modal.setAppElement('#root');

    const setModalRenderingTrue = () => {
        setModalRendering(true)
    };
    const setModalRenderingFalse = () => {
        setModalRendering(false)
    };


    useEffect(() => {
        if (!userId) {
          return
        }
        async function fetchData() {
          const response = await fetch(`/api/users/`);
          const profObj = await response.json();
          const userArr = profObj.users;
          console.log(userArr)
          setProfiles(userArr);
          setSearchResults(userArr);
        };
        fetchData();
    }, []);


    const vendorBooltoString = (bool) => {
        if (bool){ return 'Vendor' }
        else { return 'Buyer' }
    };

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
        <div id='modalHolder'>
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
            {searchResults.map((profile, i) => (
                <div id='singleProfileDiv' key={i}>
                    <h3>{profile.companyName}</h3>
                    <h5>{profile.name}</h5>
                    <p id='vendorTag'><em>{vendorBooltoString(profile.isVendor)}</em></p>
                    <p>{profile.summary}</p>
                    <button onClick={setModalRenderingTrue} id='reqMeetingButton'>Request meeting</button>
                    <Modal
                        isOpen={modalRendering}
                        onRequestClose={setModalRenderingFalse}
                        // overlayClassName='modalHolder'
                        parentSelector={() => document.querySelector('#root')}
                        style={
                            { overlay: {
                              position: "fixed",
                              height: "100%",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: "rgba(121, 125, 255, 0.9)"
                            },
                            content: {
                              position: "absolute",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: '160px',
                              height: "fit-content",
                              top: "100px",
                              left: "44%",
                              bottom: "40px",
                              border: "1px solid #ccc",
                              background: "#fff",
                              overflow: "auto",
                              WebkitOverflowScrolling: "touch",
                              borderRadius: "4px",
                              outline: "none",
                              padding: "20px",
                              boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
                            }
                          }}>
                              <MeetingForm />
                          </Modal>
                </div>
            ))}
            </div>
        </div>
    )

}

export default Search
