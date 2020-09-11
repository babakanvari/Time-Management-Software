import React, { useState } from 'react';
import { login } from '../Services/authService';

export const Login = ({ user, setUser, history }) => {
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }

    const loginRequest = async () => {
        if (input.email && input.password) {
            try {
                user = await login(input);
                history.replace('/');
                if (user != '') { setUser(user) };
            }
            catch (err) {
                alert(err.response.data);
            }
        }
        else {
            alert('Please provide email and password');
        }
    }

    return (
        <div className='card p-4 m-4'>
            {(user === '') && <h6>Enter your username and password</h6>}
            {(user != '') && <h3 className='row justify-content-md-center'>Welcome {user.firstName}</h3>}
            <div className='container'>
                <input type="text" placeholder="Enter user Email" name="email" onChange={handleInputChange} /><br /><br />
                <input type="password" placeholder="Enter user password" name="password" onChange={handleInputChange} /><br /><br />
                <button className="btn btn-primary" onClick={loginRequest}>Sign in</button>
            </div>
        </div>
    );
}