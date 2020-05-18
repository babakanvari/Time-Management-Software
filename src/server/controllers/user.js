let users = require('express').Router();
import * as services from '../services/user';

users.get('/', async (req, res) => {
    console.log('recieved get request');
    console.log(req.query);
    let email = req.query.email;
    let user = await services.find(email);
    console.log(`Controller : ${user}`);
    res.send(user);
});

module.exports = users;
