import express from 'express';
let app = express();
let router = require('./controllers/router');
import error from './middleware/errorMiddleware';

//setup app middlewares
require('./middleware/appMiddleware')(app);

//setup app routers
app.use(router);

//setup error handling middleware
app.use(error);

let port = 7777
app.listen(port, console.log("Server listening on port ", port));