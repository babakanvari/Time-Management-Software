import React, { useState, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { authHeader } from '../Services/authHeader';

let url = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:7777/user';

export const Users = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const handleInputChange = (e) => { setUserEmail(e.target.value) }
    async function findUser(e) {
        e.preventDefault();
        try {
            let response = await axios({
                method: 'get',
                url: url,
                headers: authHeader(),
                params: { email: userEmail }
            });
            if (!response.data) {
                alert('user does not exist, please try different user ID');
            }
            else {
                setUserInfo(response.data);
            }
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <div className='card p-4 m-4'>
            <div>
                <Link to="/user/register"><button>Create New User</button></Link><br /><br />
            </div>
            <form onSubmit={findUser}>
                <input type="text" placeholder="Enter user Email" name="userEmail" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Find User" />
            </form>
            <div>
                {
                    Object.keys(userInfo).map(
                        (key) => (
                            <Fragment key={key}>
                                <h5>{key}:</h5>
                                <p>{userInfo[key]}</p>
                            </Fragment>
                        )
                    )
                }
            </div>
        </div>
    );
}