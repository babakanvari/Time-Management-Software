import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as userDataAccess from './dataAccess/user'; // User related queries.

let router = express.Router();
router.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

router.post('/user/new',async (req,res)=>{
    let newUser = req.body.newUser;
    await userDataAccess.addUser(newUser);
    res.status(200).send();
});
router.post('/user/profile',async (req,res)=>{
    let id = req.body.id;
    let response  = await userDataAccess.findProfile(id);
    res.status(200).send(response);
});
router.post('/user/update',async (req,res)=>{
    let updatedInfo = req.body.updatedInfo;
    await updateUser(updatedInfo);
    res.status(200).send();
});
module.exports = router;