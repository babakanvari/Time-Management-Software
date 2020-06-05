// setup global middleware.
import cors from 'cors';
import bodyParser from 'body-parser';
import customError from './appError';

module.exports = function (app) {
    app.use(
        cors(),
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),
        customError
    );
}