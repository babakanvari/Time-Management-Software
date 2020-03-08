import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let url = "http://localhost:7777";


export const Users = (props) => {
    const employees = props.userInformation.users;
    const [user, setUser] = useState('');
    const userInformation = (e) => {
        let id = e.target.value;
        let displayEmployee = employees.find(employee => employee.id === id );
        setUser(displayEmployee);
    }

    return (
        <div>
            <div>
                <select onChange={userInformation} >
                    {employees.map(user => (
                        <option key ={user.id} value={user.id} label='Select User'> {user.name} </option>
                        ))}
                </select>
            </div>
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
