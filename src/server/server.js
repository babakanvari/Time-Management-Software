import express from 'express';
let router = require('./router');

let port = 7777
let app = express();
app.listen(port,console.log("Server listening on port ", port));
app.use(router);

