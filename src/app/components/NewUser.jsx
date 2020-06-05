import React, { useState } from 'react';
import axios from 'axios';

let url = "http://localhost:7777/user/register";

export const NewUser = () => {
    const [user, setUser] = useState({});
    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await axios.post(url, user);
        console.log(response.data);
    }

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

    return (
        <div>
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