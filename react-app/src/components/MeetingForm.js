import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMeetingReq } from '../../store/session';
import '../CSS.Meeting.css'

const MeetingForm = ({props}) =>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const sendUserId = user.id
    const recUserId = props.profId
    const accepted = false;

    const [message, setMessage] = useState("");

    const updateMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitMeetingReq = async (e) => {
        e.preventDefault();
        await dispatch(sendMeetingReq(sendUserId, recUserId, message, accepted));
    }

    return (
        <div>
            <form onSubmit={submitMeetingReq}>
            <textarea
                name="message"
                onChange={updateMessage}
                value={message}
                className='textInput'
                placeholder='Message'
            ></textarea>
            </form>
        </div>
    )
};

export default MeetingForm;
