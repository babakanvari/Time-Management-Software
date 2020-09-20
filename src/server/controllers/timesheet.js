const router = require('express').Router();
import ash from '../middleware/asyncHandler';
import { verifyToken } from '../middleware/verifyToken';
import { response } from 'express';
import * as services from '../services/timesheet';
import * as projectServices from '../services/project';

//Find timesheet
router.get('/find', ash(async (req, res, next) => {
    let projects = await projectServices.findAll();
    let timesheet = await services.find(req.query.weekEnd, req.query.userId);
    if (timesheet) {
        timesheet.projects = projects;
    }
    else {
        timesheet = req.query;
        timesheet.projects = projects;
        timesheet.data = [];
    }
    res.send(timesheet);
}))

//Save timesheet
router.post('/save', ash(async (req, res, next) => {
    console.log(req.body);
    let timesheet = await services.find(req.body.weekEnd, req.body.userId);
    if (timesheet) {
        let timesheet = await services.update(req.body);
        res.send(timesheet);
    }
    else {
        let timesheet = await services.create(req.body);
        console.log(timesheet);
        res.send(timesheet);
    }
}))

module.exports = router;




let setup = {
    name: 'projectSetup',
    timesheet: {
        columns: ['date', 'project', 'activity', 'category', 'transactionText', 'hour'],
        activity: ['Vacation', 'Meeting', 'Holiday'],
        category: ['A-200', 'Z-ENG', 'S-ENG'],
    }
}