const dataAccess = require('../dataAccess/user');

//Create new user
export const create = async (user) => {
    return await dataAccess.create(user);
}

//Find User information with unique email.
export const find = async (userEmail) => {
    return await dataAccess.findByEmail(userEmail);
}

//Update user
export const update = async (userInfo) => {
    return await dataAccess.update(userInfo);
}