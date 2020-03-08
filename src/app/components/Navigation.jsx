import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Users'><li>Users</li></Link>
            <Link to='/Projects'><li>Projects</li></Link>
            <Link to='/'><li>Time Sheet</li></Link>
        </ul>
    </div>
);
