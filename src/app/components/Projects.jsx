import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { authHeader } from '../Services/authHeader';


const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/project";

export const Projects = () => {
    const [projectNumber, setProjectNumber] = useState('');
    const [project, setProject] = useState('');

    const findProject = async (e) => {
        e.preventDefault();
        let response = await axios({
            method: 'post',
            url: url + '/find',
            headers: authHeader(),
            data: projectNumber
        });
        console.log(response.data);

    }
    //Function to update state containing project number.
    const handleInputChange = (e) => {
        setProjectNumber(e.target.value);
    }
    return (
        <div class='card p-4 m-4'>
            <h4>Project Information</h4>
            <form onSubmit={findProject}>
                <input type="text" placeholder="Enter Project Number" name="Project Number" onChange={handleInputChange} />
                <input type="submit" value="Search" /><br />
            </form>
            <div>
                <Link to="/project/new"><button>Create New Project</button></Link><br /><br />
            </div>
            <ul>
                {
                    Object.keys(project).map(key => (
                        <li>
                            {(`${key} : ${project[key]}`)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}