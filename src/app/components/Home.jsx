import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './resources/homePagePicture.png';

export const Home = ({ user }) => {

    return (
        <div className='card p-4 m-4'>

            {(user === '') &&
                <fieldset className='container'>
                    <Link to="/user/login"><button className="btn btn-primary">Sign in</button></Link><br /><br />
                    <Link to="/user/register"><button className="btn btn-primary">Create account</button></Link>
                </fieldset>
            }
            {(user != '') &&
                <p>Welcome {user.firstName}</p>
            }

            <img src={Logo} alt="websote logo" height="600" mode="fit" />

        </div>
    );
}