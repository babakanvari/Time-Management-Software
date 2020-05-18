const userDataAccess = require('../dataAccess/user');

//Create new user
export const create = async (userInfo) => {
    return await userDataAccess.create(userInfo);
}

//Find User information with unique email.
export const find = async (userEmail) => {
    return await userDataAccess.findByEmail(userEmail);
}

//Update user
export const update = async (userInfo) => {
    return await userDataAccess.update(userInfo);
}