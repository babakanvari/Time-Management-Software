import { disConnectdb } from '../dataAccess/database';

let error = (err, req, res, next) => {
    console.log('Error handling midleware --------------->  ' + err);
    disConnectdb();
    res.status(err.status).send(err.message);
}

module.exports = error;