import React, { FC } from 'react';
import Container from '../Container';
import Project from './Project';

interface IProject {
    title: string;
    description: string;
    coverImg: string;
    skills: string[];
    tags: string[];
    teamMembers: string[];
}

interface Props {
    projects: IProject[];
}

const ActiveProjects: FC<Props> = ({ projects }) => {
    return (
        <Container>
            {projects.map(({ title, description, coverImg, skills, teamMembers }, dex) => (
                <Project key={dex} title={title} description={description} coverImg={coverImg} skills={skills} teamMembers={teamMembers}/>
            ))}
        </Container>
    )
}

export default ActiveProjects;