import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let url = "http://localhost:7777";


export const Users = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState('');

    async function findUser(e) {  
        e.preventDefault();  
        try{
            let response = await axios.post(url + '/user/findUser',{id:userId});
            const userInformation = response.data;
            if (typeof userInformation === "undefined"){
                alert ('user does not exist, please try different user ID');
            }   else{
                    setUser(userInformation);
                }
        }
        catch (error){
            alert(error);
        }
    }
    const handleInputChange = (e) => {setUserId (e.target.value);}

    return (
        <div>
            <form onSubmit={findUser}>
                <input type="text" placeholder="Enter user ID" name="userId" onChange={handleInputChange}/><br/><br/>
                <input type="submit" value="Find User"/>
            </form>
            <div>
                <br/>
                <p>User: {user.name}</p>
                <p>ID: {user.id}</p>
                <p>Role: {user.role}</p>
                <p>Employment Date: {user.employedSince}</p>
            </div>
            <div>
            <Link to="/NewUser"><button>Create New User</button></Link>
            </div>
        </div>
    );
}
