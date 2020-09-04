import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from './resources/homePagePicture.png';

// const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/user/register";

export const Home = () => {


    return (
        <div class='card p-4 m-4'>
            <div class='container'>
                <Link to="/user/login"><button class="btn btn-primary">Sign in</button></Link><br /><br />
                <Link to="/user/register"><button class="btn btn-primary">Create account</button></Link>
            </div>
            <div>
                <img src={Logo} alt="websote logo" height="600" mode="fit" />
            </div>
        </div>
    )
}