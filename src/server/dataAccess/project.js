import ProjectModel from './models/project';
import { connectdb, disConnectdb } from './database';
import { Project } from '../entities/project';


//Create new project
export const create = async (projectInfo) => {
    connectdb();
    let project = new ProjectModel(projectInfo);
    await project.save();
    // disConnectdb();
    return (project);
}

//find project information by project number
export const find = async (projectNumber) => {
    connectdb();
    let projectInfo = await ProjectModel.findOne({ number: projectNumber });
    let project = projectInfo ? new Project(projectInfo) : null;
    return project;
}

//Return list of all projects
export const findAll = async () => {
    connectdb();
    return await ProjectModel.find({});
}