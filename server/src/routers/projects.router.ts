import { Router } from 'express';
import {
    createProject,
    deleteProject,
    getProject,
    updateProject,
    getAllProjects,
    deleteAllProjects,
} from '../controllers/project.controller';

const router = Router();

router.get('/', getAllProjects); // gets a list of all projects in database
router.get('/:id', getProject); // get specific project details from database
router.post('/', createProject); // create a project in database
router.put('/:id', updateProject); // update a project from database
router.delete('/:id', deleteProject); // delete a project from database
router.delete('/', deleteAllProjects); // deletes all projects from database

export default router;
