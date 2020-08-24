import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <div>
        <nav class="navbar navbar-light bg-light">

            <Link to='/'><a>Home</a></Link>
            <Link to='/user/login'><a>Login</a></Link>
            <Link to='/user'><a>Users</a></Link>
            <Link to='/project'><a>Projects</a></Link>
            <Link to='/timesheet'><a>Timesheet</a></Link>
        </nav>
    </div>
);
