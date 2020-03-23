import { connectDB, disConnectDB, databaseInfo } from '../db_connection';
import * as user from '../entities/user';

//Add new user
export const addUser = async newUser => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(newUser);
    console.log('Data Successfully Added');
};

//Find user by ID
export const findProfile = async id => {
    let db = await connectDB();
    let userInfo = await db.collection('users').findOne({ 'id': id });
    console.log(userInfo);
    if (!userInfo) {
        return null;
    }
    else {
        let userProfile = new user.Profile(userInfo);
        return userProfile;
    }
};

//Update user by ID
const updateUser = async (userID, updatedInfo) => {
    let { id, name, role, employedSince } = updatedInfo;
    let db = await connectDB();
    await db.collection('users').updateOne(
        { 'id': userID },
        {
            $set:
            {
                id: id,
                name: name,
                role: role,
                employedSince: employedSince
            }
        }
    );
    console.log('Data successfully update')
};