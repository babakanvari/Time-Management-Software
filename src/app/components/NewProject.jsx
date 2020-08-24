import React, { useState } from 'react';
import axios from 'axios';
import { authHeader } from '../Services/authHeader';

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/project/new";

export const NewProject = () => {
    const [project, setProject] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await axios({
            method: 'post',
            url: url,
            headers: authHeader(),
            data: project
        });
        console.log(response.data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject(project => ({ ...project, [name]: value }));
    }
    return (
        <div class='card p-4 m-4'>
            <h5>
                Enter new project information.
            </h5>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Project number" name="number" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Customer ID" name="customerId" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Address" name="address" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}