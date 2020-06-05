import React, { useState } from 'react';
import { login, logout } from '../Services/authService'

export const Login = () => {
    const [input, setInput] = useState({});

    async function signinRequest(e) {
        e.preventDefault();
        login(input);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }

    return (
        <div>
            <div>
                <h3>Sign in to your account</h3>
            </div>
            <form onSubmit={signinRequest}>
                <input type="text" placeholder="Enter user Email" name="email" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Enter user password" name="password" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Sign in" />
            </form>
            <input type="submit" value="Sign out" onClick={logout} />
        </div>
    );
}