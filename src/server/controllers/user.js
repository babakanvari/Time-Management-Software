let router = require('express').Router();
import { User } from '../entities/user'
import ash from '../middleware/asyncHandler';
import * as services from '../services/user';

router.get('/', async (req, res) => {
    console.log('recieved get request');
    console.log(req.query);
    let email = req.query.email;
    let user = await services.find(email);
    console.log(`Controller : ${user}`);
    res.send(user);
});

router.post('/', ash(async (req, res) => {
    let user = new User(req.body);
    user = await services.create(user);
    res.send(user);
}));

module.exports = router;