import { disConnectdb } from '../dataAccess/database';

let error = (err, req, res, next) => {
    disConnectdb();
    // if (err.name = 'ValidationError') {
    //     console.log(' ***************--------////-------->  ' + err);
    // }
    if (err.status) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
    else {
        console.log(`error message does not have status code ---> ${err.message}`)
    }
}

module.exports = error;