import { disConnectdb } from '../dataAccess/database';

let error = (err, req, res, next) => {
    // console.log('Error handling midleware --------------->  ' + err);
    disConnectdb();
    if (err.name = 'ValidationError') {
        console.log(' ***************--------////-------->  ' + err);
    }
    err.status ? res.status(err.status).send(err.message) : res.send(err.message);
}

module.exports = error;