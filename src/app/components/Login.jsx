import React, { useState } from 'react';
import { login, logout } from '../Services/authService'

export const Login = () => {
    const [input, setInput] = useState({});

    async function signinRequest(e) {
        login(input);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }

    return (
        <div class='card p-4 m-4'>
            <div class='row justify-content-md-center'>
                <h3>Sign in to your account</h3>
            </div>
            <div class='container'>
                <input type="text" placeholder="Enter user Email" name="email" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Enter user password" name="password" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Sign in" onClick={signinRequest} class="btn btn-primary" /><br /><br />
                <input type="submit" value="Sign out" onClick={logout} class="btn btn-primary" />
            </div>
        </div>
    );
}