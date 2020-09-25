import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { authHeader, userId } from '../Services/authHeader';


const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777";

export const Projects = () => {
    let [project, setProject] = useState({});

    const findProject = async () => {
        let response = await axios({
            method: 'get',
            url: url + '/project/find',
            headers: authHeader(),
            params: {
                projectNumber: project.number,
                userId: userId()
            }
        });
        project = response.data;
        setProject(project);
    }

    const handleInputChange = (e) => {
        project.number = e.target.value;
        setProject(project);
    }
    return (
        <div className='card p-4 m-4'>
            <h4>Project Information</h4><br />
            <div>
                <input type="text" placeholder="Enter Project Number" name="Project Number" onChange={handleInputChange} /><br />
                <input type="submit" value="Search" onClick={findProject} className='btn btn-primary mt-2' /><br />
                <Link to="/project/new"><button className='btn btn-primary mt-2'>Create New Project</button></Link><br /><br />
            </div>
            {(project.id) &&
                <form>
                    <label >Project ID:</label>
                    <label>{project.id}</label><br />
                    <label>Project Number:</label>
                    <label>{project.number}</label><br />
                    <label>Project Address:</label>
                    <label>{project.address}</label><br />
                </form>
            }
        </div>
    )
}