import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authHeader } from '../Services/authHeader';

export const Navigation = () => {
    const [loggedIn, setLoggedIn] = useState('false');
    const navBarUpdate = () => {
        if (authHeader) {
            console.log('user already logged in');
            setLoggedIn(true);
        }
    }

    return (
        <div>
            {/* {
                switch()
            } */}
            <nav class="navbar navbar-light bg-light">
                <Link to='/'><a>Home</a></Link>
                <Link to='/user/login'><a>Login</a></Link>
                <Link to='/user'><a>Users</a></Link>
                <Link to='/project'><a>Projects</a></Link>
                <Link to='/timesheet'><a>Timesheet</a></Link>
            </nav>
        </div>
    );
}