import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMeetingReq } from '../store/session.js';
import './CSS/MeetingForm.css'

const MeetingForm = (props) =>{
    const dispatch = useDispatch();
    // const history = useHistory();
    const user = useSelector(state => state.session.user);
    const sendUserId = user.id;
    const recUserId = props.recUserId;
    const accepted = false;
    const recName = props.recName;
    const recCompanyName = props.recCompanyName;
    const setModalRendering = props.setModalRendering

    // console.log('heeeeeeeeeres user', user)

    const [message, setMessage] = useState("");

    const updateMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitMeetingReq = (e) => {
        e.preventDefault()
        dispatch(sendMeetingReq(sendUserId, recUserId, message, accepted));
        setModalRendering(false)
        // history.push("/");
    };

    return (
        <div id='formDiv'>
            <form id='meetingReqForm'>
                <h3 id='meetingReqHeader'>Meeting Request</h3>
                <h5 id='recipName'><em>{recCompanyName}</em></h5>
                <p id='recipCompanyName'>{recName}</p>
                <textarea
                    name="message"
                    onChange={updateMessage}
                    value={message}
                    className='textInput'
                    placeholder='Message'
                ></textarea>
                <button onClick={submitMeetingReq} id='meetingReqButton'>Send</button>
            </form>
        </div>
    )
};

export default MeetingForm;
