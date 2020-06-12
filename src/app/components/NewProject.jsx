import React, { useState } from 'react';
import axios from 'axios';

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/project";

export const NewProject = () => {
    const [newProject, setNewProject] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await axios.post(url, newProject);
        console.log(response.data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject(newProject => ({ ...newProject, [name]: value }));
    }
    return (
        <div>
            <h5>
                Enter new project information.
            </h5>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Project number" name="number" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Customer" name="customer" onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Address" name="address" onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}