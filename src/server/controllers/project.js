let projectRouter = require('express').Router();
import { Project } from '../entities/project';
import * as projectServices from '../services/project';
import ash from '../middleware/asyncHandler';

projectRouter.post('/', ash(async (req, res, next) => {
    let project = new Project(req.body);
    project = await projectServices.create(project, next);
    res.send(project);
}));

module.exports = projectRouter;