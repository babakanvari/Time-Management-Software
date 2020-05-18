import UserModel from './models/user';
import { connectdb, disConnectdb } from './database';
import { User } from '../entities/user';

//Create new user
const create = async userInfo => {
  connectdb();
  let user = new UserModel(userInfo);
  await user.save();
  disConnectdb();

  return user;
}

//Find User information by email.
const findByEmail = async userEmail => {
  connectdb();
  let userinfo = await UserModel.findOne({ email: userEmail });
  let user = new User(userinfo);
  disConnectdb();

  return user;
}

//Update user by ID and return updated information
const update = async userInfo => {
  connectdb();
  let user = await UserModel.findByIdAndUpdate(
    { _id: userInfo._id },
    {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      currentPosition: userInfo.currentPosition,
      employmentDate: userInfo.employmentDate,
    },
    { new: true }
  )
  disConnectdb();
  
  return user;
}

module.exports = {
  create,
  findByEmail,
  update
}