import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Services/authService'


export const Navigation = ({ user, setUser }) => {
    const logoutRequest = () => {
        logout();
        setUser('');
    }

    if (user === "") {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                </nav>
            </div>
        )
    }
    else {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <Link to='/'>Home</Link>
                    <Link to='/user'>Users</Link>
                    <Link to='/project'>Projects</Link>
                    <Link to='/timesheet'>Timesheet</Link>
                    <Link to='/'><button onClick={logoutRequest} className="btn btn-primary">Exit</button></Link>
                </nav>
            </div>
        );
    }
}