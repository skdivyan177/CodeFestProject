import {Component, useState} from 'react';

const LogIn = ({ onLogin }) => {

    const [user, setUser] = useState([])
    const [email, setEmail] = useState('');
    const [passwrd, setPasswrd] = useState('');
    
    

    const handleSubmit = () => {
        setUser(prevState => [...prevState, {
            userEmail: email,
            userPassWrd: passwrd
        }])
        
        onLogin();
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswrdChange = (e) => {
        setPasswrd(e.target.value);
    }

    return (
    <div className='login-txt'>
        <div>
            <h6 className='label-txt'>Email</h6>
            <input className='input-txt' type='text' value={email} onChange={handleEmailChange} placeholder='Enter email address'></input>
        </div>

        <div>

            <h6 className='label-txt'>Password</h6>
            <input className='input-txt' type='text' value={passwrd} onChange={handlePasswrdChange} placeholder='Enter password'></input>
        </div>

        <div>
            <button className='submit-button' onClick={handleSubmit}>
                Sign Up
            </button>
        </div>
        


    </div>)
}

export default LogIn;