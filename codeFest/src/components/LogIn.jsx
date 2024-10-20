import {Component, useState} from 'react';

const LogIn = () => {

    const [user, setUser] = useState([])
    const [email, setEmail] = useState('');
    const [passwrd, setPasswrd] = useState('');

    const handleSubmit = () => {
        setUser(prevState => [...prevState, {
            userEmail: email,
            userPassWrd: passwrd
        }])
        
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswrdChange = (e) => {
        setPasswrd(e.target.value);
    }

    return (
    <div className='login-txt'>
        <h5>Email</h5>
        <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter email address'></input>
        <input type='text' value={passwrd} onChange={handlePasswrdChange} placeholder='Enter password'></input>
        <h5>Password</h5>

        <button className='submit-button' onClick={handleSubmit}>
            Submit
        </button>


    </div>)
}

export default LogIn;