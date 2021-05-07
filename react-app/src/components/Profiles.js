import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './CSS/Profiles.css'


const Profiles = () => {

    const user = useSelector(state => state.session.user)
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        if (!user.id) {
          return
        }
        (async () => {
          const response = await fetch(`/api/users/`);
          const profObj = await response.json();
          console.log(profObj.users)

          setProfiles(profObj.users);
        })();
      }, [user.id]);

    const vendorBooltoString = (bool) => {
        if (bool){
            return 'Vendor'
        }
        else {
            return 'Buyer'
        }

    }

    return (
        <div id='profilesDiv'>
            {profiles && profiles.map((profile, i) => (
                <div id='singleProfileDiv' key={i}>
                    <h3>{profile.companyName}</h3>
                    <p>{profile.name}</p>
                    <p>{vendorBooltoString(profile.isVendor)}</p>
                    <p>{profile.summary}</p>
                    <button id='reqMeetingButton'>Request meeting</button>
                </div>
            ))}
        </div>
    )

}

export default Profiles;
