//api router will mount other routers.
let router = require('express').Router();

//users router
router.use('/user', require('./user'));

//projects router
router.use('/project', require('./project'));

//weekly hours routers
router.use('/timesheet', require('./timesheet'));

module.exports = router;