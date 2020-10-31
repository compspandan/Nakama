import React, { FC } from 'react';
import Card from '../Trending/Card';
import Img from './Img';
import { Skill, SkillContainer } from '../Trending/Text';
import { Desc, Title } from './Text';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';
import Container from './Container';


interface Props {
    title: string;
    description: string;
    coverImg: string;
    skills: string[];
    teamMembers: string[];
}

const Project: FC<Props> = ({ title, description, coverImg, skills, teamMembers }) => {

    return (
        <Card>
            <div>
                <Container>
                    <Title>{title}</Title>
                    <Desc>{description}</Desc>
                </Container>
                <Container>
                    {teamMembers.map((username, dex) => (
                        <Link to={`/user/${username}`} key={dex}>
                            <Avatar src={`https://picsum.photos/200/300?random=${dex}`} size="large" style={{ margin: "5px" }} />
                        </Link>
                    ))}
                </Container>
                <SkillContainer>
                    {skills.map((skill, dex) => {
                        if (dex <= 2) return (<Skill to={`/skills/${skill}`} key={dex}>{skill}</Skill>)
                        else return "";
                    })}
                </SkillContainer>
            </div>
            <Img src={coverImg} alt={title} />
        </Card>
    )
}

export default Project;