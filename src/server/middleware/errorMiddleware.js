import { disConnectdb } from '../dataAccess/database';

let error = (err, req, res, next) => {
    console.log(err);
    disConnectdb();
    res.send(err);
}

module.exports = error;