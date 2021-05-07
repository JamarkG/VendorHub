import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { updateProfile } from '../../store/session';
import '../CSS/UpdateProfileForm.css';

const UpdateProfileForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [name, setName] = useState(user.name);
    const [companyName, setCompanyName] = useState(user.companyName);
    const [isVendor, setIsVendor] = useState(user.isVendor);
    const [summary, setSummary] = useState(user.summary);
    const [emailAddress, setEmailAddress] = useState(user.emailAddress);
    const [password, setPassword] = useState(user.password);
    const [repeatPassword, setRepeatPassword] = useState("");

    const onUpdate = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            await dispatch(updateProfile(name, companyName, isVendor, summary, emailAddress, password));
        }
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateCompanyName = (e) => {
        setCompanyName(e.target.value);
    };

    const updateSummary = (e) => {
        setSummary(e.target.value);
    };

    const updateIsVendor = (e) => {
        setIsVendor(e.target.value);
    };

    const updateEmailAddress = (e) => {
        setEmailAddress(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    return <form onSubmit={onUpdate}>
        <div className='inputDiv'>
            <label>Name</label>
            <input
            type="text"
            name="name"
            onChange={updateName}
            value={name}
            className='textInput'
            >{user.name}</input>
        </div>
        <div className='inputDiv'>
            <label>Company Name</label>
            <input
            type="text"
            name="companyName"
            onChange={updateCompanyName}
            value={companyName}
            className='textInput'
            >{user.companyName}</input>
        </div>
        <div className='inputDiv'>
            <label>Are you a vendor?</label>
            <input
            type="checkbox"
            name="isVendor"
            onChange={updateIsVendor}
            value={isVendor}
            className='textInput'
            >{user.isVendor}</input>
        </div>
        <div className='inputDiv'>
            <label>Summary</label>
            <textarea
            name="summary"
            onChange={updateSummary}
            value={summary}
            className='textInput'
            >{user.summary}</textarea>
        </div>
        <div className='inputDiv'>
            <label>Email</label>
            <input
            type="text"
            name="emailAddress"
            onChange={updateEmailAddress}
            value={emailAddress}
            className='textInput'
            >{user.emailAddress}</input>
        </div>
        <div className='inputDiv'>
            <label>Password</label>
            <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            className='textInput'
            >{user.password}</input>
        </div>
        <div className='inputDiv'>
            <label>Repeat Password</label>
            <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='textInput'
            ></input>
        </div>
        <div className='inputDiv'>
            <button type="submit" id='signUpButton'>Update my profile</button>
        </div>
        </form>;
}

export default UpdateProfileForm;
