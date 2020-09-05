import React, { useState } from 'react';
import { login } from '../Services/authService';
import { Link } from 'react-router-dom';


export const Login = ({ user, setUser }) => {
    const [input, setInput] = useState({});

    async function signinRequest(e) {
        user = await login(input);
        if (user != '') { setUser(user) };
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }

    return (
        <div className='card p-4 m-4'>
            <div className='row justify-content-md-center'>
                <h3>Sign in to your account</h3>
            </div>
            <div className='container'>
                <input type="text" placeholder="Enter user Email" name="email" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Enter user password" name="password" onChange={handleInputChange} /><br /><br />
                <button className="btn btn-primary" onClick={signinRequest}>Sign in</button>
            </div>
        </div>
    );
}