const jwt = require("jsonwebtoken");
import config from '../config/config';
import * as services from '../services/user';

export const verifyToken = (req, res, next) => {
    console.log('Verifying the token');
    let token = req.headers["x-access-token"];
    if (!token) {
        res.appError('Token is not provided', 403);
    }
    jwt.verify(token, config.secret, async (err, decoded) => {
        console.log(err);
        if (err) res.appError('Unauthorized!', 401);
        req.body.user = await services.find(decoded.email);
        next();
    });
};