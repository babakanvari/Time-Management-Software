import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB, disConnectDB, databaseInfo } from './db_connection';

let router = express.Router();
router.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

//Add new user
const addUser = async newUser => {
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(newUser);
    console.log('Data Successfully Added');
};

router.post('/user/new',async (req,res)=>{
    let newUser = req.body.newUser;
    await addUser(newUser);
    res.status(200).send();
});

//Find user by ID
const findUser = async id => {
    let db = await connectDB();
    let response = await db.collection('users').findOne({'id' : id});
    return response;
};
router.post('/user/findUser',async (req,res)=>{
    let id = req.body.id;
    let response = await findUser(id);
    console.log(response);
    res.status(200).send(response);
});

//Update user by ID
const updateUser = async (userID, updatedInfo) => {
    let {id, name, role, employedSince} = updatedInfo;
    let db = await connectDB();
    await db.collection('users').updateOne(
        {'id' : userID},
        {$set:
            {
            id : id,
            name: name,
            role: role,
            employedSince: employedSince}
            }
        );
    console.log('Data successfully update')
};

router.post('/user/update',async (req,res)=>{
    let updatedInfo = req.body.updatedInfo;
    await updateUser(updatedInfo);
    res.status(200).send();
});

module.exports = router;