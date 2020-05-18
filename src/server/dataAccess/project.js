import ProjectModel from './models/project';
import { connectdb, disConnectdb } from './database';

//Create new project
const create = async (projectInfo) => {
    connectdb();
    let project = new ProjectModel(projectInfo);
    await project.save();
    disConnectdb();

    return (project);
}

module.exports = {
    create
}