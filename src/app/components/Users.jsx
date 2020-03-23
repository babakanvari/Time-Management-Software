import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { response } from 'express';
let url = "http://localhost:7777";

export const Users = () => {
    const [userId, setUserId] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const handleInputChange = (e) => {setUserId (e.target.value)}
    async function findUser(e) {  
        e.preventDefault(); 
        try{
            let response = await axios.post(url + '/user/profile',{id:userId});
            console.log(response);
            let userProfile = response.data;
            console.log(response);
            if (!userProfile){
                alert ('user does not exist, please try different user ID');
                console.log("doesn't exist");
            }   
            else {
                setUserInfo(userProfile);
            }
        }
        catch (error){
            alert(error);
        }
    }
    return (
        <div>
            <div>
                <Link to="/NewUser"><button>Create New User</button></Link><br/><br/>
            </div>
            <form onSubmit={findUser}>
                <input type="text" placeholder="Enter user ID" name="userId" onChange={handleInputChange}/><br/><br/>
                <input type="submit" value="Find User"/>
            </form>
            <div>
                {
                    Object.keys(userInfo).map(
                        (key)  => (
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