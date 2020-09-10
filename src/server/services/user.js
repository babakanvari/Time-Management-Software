const dataAccess = require('../dataAccess/user');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';

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

//User login
export const login = async (email, password) => {
    let user = await dataAccess.checkpassword(email);
    if (!user) throw new Error('User does not exist');
    let passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) throw new Error('Invalid password');
    let token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 3 * 60 * 60 // 3 minutes
    });
    return ({ user, token });
}

//User Register
export const register = async (req, res, next) => {
    let user = req.body;
    let existingUser = await find(user.email);
    if (existingUser) res.appError('There is already a user with the same email', 400);
    user.password = bcrypt.hashSync(user.password, 8);
    try {
        user = await create(user);
        return (user);
    }
    catch (err) {
        err.status = 400;
        console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
        next(err);
    }
}