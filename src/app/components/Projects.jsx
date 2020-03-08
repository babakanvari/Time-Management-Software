import React, {useState} from 'react';

export const Projects = (props) => {
    const projectInformation = props.projectInformation.projects;
    const [reqProjectNo, setReqProjectNo] = useState('');
    const [reqProject, setProject] = useState('');


    const searchProject = (e) => {
        e.preventDefault();
        const projectInfo = projectInformation.find((project)=>(project.number === reqProjectNo));
        console.log(projectInfo);
        if (typeof projectInfo === "undefined"){
            setProject("");
            alert ("Project Number Doesn't exist");
        }
        else {
            setProject(projectInfo);
        }
    }

    const requestedProject = (e) => {
        setReqProjectNo(e.target.value);
    }
    return (
        <div>
            <h3>Project Information</h3>
            <form onSubmit={searchProject}>
                <input type="text" placeholder="Enter Project Number" name="Project Number" onChange={requestedProject}/>
                <input type="submit" value="Search"/><br/>
            </form>
            <button>New Project</button><br/><br/>
            <ul>
                {
                    Object.keys(reqProject).map(key=>(
                        <li>
                            {(`${key} : ${reqProject[key]}`)}
                        </li>
                    ))
                }
            </ul>
        </div>
        )
}