const router = require('express').Router();
import { User } from '../entities/user'
import ash from '../middleware/asyncHandler';
import * as services from '../services/user';
import { verifyToken } from '../middleware/verifyToken';

router.get('/', verifyToken, ash(async (req, res) => {
    console.log('recieved get request');
    console.log(req.query);
    let email = req.query.email;
    let user = await services.find(email);
    console.log(`Controller : ${user}`);
    res.send(user);
}));

router.post('/', ash(async (req, res) => {
    let user = new User(req.body);
    user.password = req.body.password;
    user = await services.create(user);
    res.send(user);
}));

router.post('/register', ash(async (req, res, next) => {
    let user = await services.register(req, res, next);
    res.status(200).send(user);
}))

router.post('/login', ash(async (req, res, next) => {
    let { user, token } = await services.login(req, res, next);
    console.log(user);
    res.status(200).send({ id: user._id, firstName: user.firstName, accessToken: token });
}))

module.exports = router;