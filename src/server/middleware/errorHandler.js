import { disConnectdb } from '../dataAccess/database';

let error = (err, req, res, next) => {
    disConnectdb();
    if (err.name = 'ValidationError') {
        // console.log(' ***************--------////-------->  ' + err);
    }
    if (err.status) {
        res.status(err.status).send(err.message);
    }
    else {
        console.log('error message does not have status code')
    }
}

module.exports = error;