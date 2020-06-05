import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Projects = () => {
    const [reqProjectNo, setReqProjectNo] = useState('');
    const [projectNumber, setProjectNumber] = useState('');

    const searchProject = (e) => {
        e.preventDefault();
        const projectInfo = projectInformation.find((project) => (project.number === reqProjectNo));
        console.log(projectInfo);
        if (typeof projectInfo === "undefined") {
            setProjectNumber("");
            alert("Project Number Doesn't exist");
        }
        else {
            setProjectNumber(projectInfo);
        }
    }
    //Function to update state containing project number.
    const requestedProject = (e) => {
        setReqProjectNo(e.target.value);
    }
    return (
        <div>
            <h3>Project Information</h3>
            <form onSubmit={searchProject}>
                <input type="text" placeholder="Enter Project Number" name="Project Number" onChange={requestedProject} />
                <input type="submit" value="Search" /><br />
            </form>
            <div>
                <Link to="/newproject"><button>Create New Project</button></Link><br /><br />
            </div>
            <ul>
                {
                    Object.keys(projectNumber).map(key => (
                        <li>
                            {(`${key} : ${projectNumber[key]}`)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}