import projectDataAccess from '../dataAccess/project'

//Create new project
export const create = async (projectInfo, next) => {
    return await projectDataAccess.create(projectInfo, next);
}