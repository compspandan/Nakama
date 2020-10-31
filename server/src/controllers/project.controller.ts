import { Request, Response } from 'express';
import Project, { IProject } from '../models/project.model';

export const getAllProjects = async (_: any, res: Response) => {
    await Project.find((err: any, doc: IProject) => {
        if (!err) {
            res.status(200).json({ projects: doc, message: 'Success.' });
        } else {
            res.status(404).json({
                err,
                message:
                    'Some error occured when getting projects from database.',
            });
        }
    });
};

export const getProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Project.findById(id, (err: any, doc: IProject) => {
        if (!err) {
            if (doc) {
                res.status(200).json({ project: doc, message: 'User found.' });
            } else {
                res.status(404).json({ message: 'No such user exists.' });
            }
        } else {
            res.status(404).json({
                err,
                message:
                    'Some error occured when getting project from database.',
            });
        }
    });
};

export const createProject = async (req: Request, res: Response) => {
    const {
        title,
        teamLeader,
        members,
        description,
        skills,
        requestsSent,
        presentation,
        projectLink,
        tags,
        coverImg,
    } = req.body;

    const project = new Project({
        title,
        teamLeader,
        members,
        description,
        skills,
        requestsSent,
        coverImg,
        presentation,
        projectLink,
        tags,
        requestsReceived: [],
        likes: 0,
    });

    await project.save((err: any, doc: IProject) => {
        if (!err) {
            res.status(200).json({
                project: doc,
                message: 'Project created successfully.',
            });
        } else {
            res.status(404).json({
                err,
                message: 'Some error while creating a project.',
            });
        }
    });
};

export const updateProject = async (req: Request, res: Response) => {
    const {
        title,
        teamLeader,
        members,
        description,
        skills,
        requestsSent,
        coverImg,
        requestsReceived,
        presentation,
        projectLink,
        tags,
        likes,
    } = req.body;

    const { id } = req.params;

    const project = {};
    if (title) (project as any).title = title;
    if (teamLeader) (project as any).teamLeader = teamLeader;
    if (members) (project as any).members = members;
    if (description) (project as any).description = description;
    if (skills) (project as any).skills = skills;
    if (requestsSent) (project as any).requestsSent = requestsSent;
    if (requestsReceived) (project as any).requestsReceived = requestsReceived;
    if (coverImg) (project as any).coverImg = coverImg;
    if (coverImg) (project as any).coverImg = coverImg;
    if (likes) (project as any).likes = likes;
    if (presentation) (project as any).presentation = presentation;
    if (projectLink) (project as any).projectLink = projectLink;
    if (tags) (project as any).tags = tags;

    await Project.findByIdAndUpdate(
        id,
        project,
        {}, // options
        (err: any, doc: IProject | any) => {
            if (!err) {
                res.status(200).json({
                    message: 'Project updated successfully!',
                    project: doc,
                });
            } else {
                res.status(404).json({
                    err,
                    message: 'Some error occured when updating a project.',
                });
            }
        }
    );
};

export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Project.findOneAndDelete({ _id: id }, (err: any) => {
        if (!err) {
            res.status(200).json({ message: 'Project deleted successfully!' });
        } else {
            res.status(404).json({
                err,
                message: 'Some error occured when deleting a project.',
            });
        }
    });
};

export const deleteAllProjects = async (req: Request, res: Response) => {
    await Project.deleteMany({}, (err: any) => {
        if (!err) {
            res.status(200).json({
                message: 'All projects deleted successfully!',
            });
        } else {
            res.status(404).json({
                err,
                message: 'Some error while deletign projects.',
            });
        }
    });
};
