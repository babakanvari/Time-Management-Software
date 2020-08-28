let router = require('express').Router();
import { Project } from '../entities/project';
import * as services from '../services/project';
import ash from '../middleware/asyncHandler';
import { verifyToken } from '../middleware/verifyToken';
import { response } from 'express';
import { promises as fs } from 'fs';
import neatCsv from 'neat-csv';


router.get('/csv', ash(async (req, res, next) => {
    console.log('Updating project database from CSV file');
    console.log(projectCsv);
    res.sendStatus("200");
}));

router.post('/new', verifyToken, ash(async (req, res, next) => {
    let project = new Project(req.body);
    project = await services.create(project);
    res.send(project);
}));

router.post('/find', verifyToken, ash(async (req, res, next) => {
    res.send('Search function is not implemented yet');
}));

module.exports = router;

// let projectCsv = fs.readFile('./projects.csv')
//     .then((data) => neatCsv(data))
//     .then((data) => (data))
//     .catch((err) => (err))
