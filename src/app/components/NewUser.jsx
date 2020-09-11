import React, { useState } from 'react';
import axios from 'axios';

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/user/register";

export const NewUser = ({ history }) => {
    const [user, setUser] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName' || name === 'lastName') {
            let objRegExp = /^[A-Za-z ]+$/; // reqular expression to check for certain characters.
            let inputVerification = objRegExp.test(value);
            if (value != "" && !inputVerification) {
                alert('Name can not contain numbers!!!');
            }
        }
        setUser(user => ({ ...user, [name]: value }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (user.email && user.firstName && user.lastName && user.password && user.currentPosition && user.employmentDate) {
            try {
                let response = await axios.post(url, user);
                alert("User was successfully created.");
                history.replace('/user/login');
                console.log(response.user);
            }
            catch (err) {
                if (err.response) { alert(err.response.data) };
            }
        }
        else {
            alert('All fields are required.');
        }
    }

    return (
        <div className='card p-4 m-4'>
            <h5>
                Enter new user information.
            </h5>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Email Address" name="email" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Password" name="password" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="First name" name="firstName" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Last name" name="lastName" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Position" name="currentPosition" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Employment Date " name="employmentDate" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}