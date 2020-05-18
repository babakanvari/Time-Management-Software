let router = require('express').Router();
import { Project } from '../entities/project';
import * as projectServices from '../services/project';
import ash from '../middleware/asyncHandler';

router.post('/', ash(async (req, res, next) => {
    let project = new Project(req.body);
    project = await projectServices.create(project, next);
    res.send(project);
}));

module.exports = router;