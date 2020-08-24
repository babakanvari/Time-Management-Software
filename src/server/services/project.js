import * as dataAccess from '../dataAccess/project'

//Create new project
export const create = async (projectInfo) => {
    return await dataAccess.create(projectInfo);
}

//Find project by project numnber
export const find = async (projectNumber) => {
    return await dataAccess.find(projectNumber);
}

//Return list of all projects
export const findAll = async () => {
    return await dataAccess.findAll();
}