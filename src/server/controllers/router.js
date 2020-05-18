//api router will mount other routers.
let router = require('express').Router();

//users router
router.use('/users', require('./user'));

//projects router
router.use('/project', require('./project'));

//weekly hours routers
module.exports = router;