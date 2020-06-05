import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/user/login'><li>Login</li></Link>
            <Link to='/user'><li>Users</li></Link>
            <Link to='/project'><li>Projects</li></Link>
            <Link to='/'><li>Time Sheet</li></Link>
        </ul>
    </div>
);
