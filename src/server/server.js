import express from 'express';
import errorHandler from './middleware/errorHandler';
import config from './config/config';

let app = express();

require('./middleware/appMiddleware')(app); //setup app middlewares
app.use(require('./controllers/router'));   //setup app routers
app.use(errorHandler); //setup error handler
app.listen(config.port, console.log("Server listening on port ", config.port));