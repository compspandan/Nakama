import { ArrowUp } from 'phosphor-react';
import React, { FC, useState } from 'react';
import Card from './Card';
import Img from './Img';
import Likes, { CommentBtn, LikeBtn, LikesContainer } from './Likes';
import Request from './Request';
import { Desc, Skill, SkillContainer, Title } from './Text';


interface Props {
    title: string;
    description: string;
    coverImg: string;
    skills: string[];
    tags: string[];
    likes: number;
}

const Project: FC<Props> = ({ title, description, coverImg, skills, tags, likes }) => {
    const [votes, setVotes] = useState<number>(likes);
    const [voteVal, upvote] = useState<Boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const onClick = () => {
        if (voteVal) {
            upvote(false);
            setVotes(votes - 1);
        }
        else {
            upvote(true);
            setVotes(votes + 1);
        }
    }

    return (
        <Card>
            <Img src={coverImg} alt={title} />
            <div>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
                <SkillContainer>
                    {skills.map((skill, dex) => {
                        if (dex <= 2) return (<Skill to={`/skills/${skill}`} key={dex}>{skill}</Skill>)
                        else return "";
                    })}
                </SkillContainer>
            </div>
            <LikesContainer>
                <LikeBtn onClick={onClick}>
                    <ArrowUp size={23} style={{ color: voteVal ? "#FF4500" : "black" }} />
                    <Likes>{votes}</Likes>
                </LikeBtn>
                <CommentBtn>
                    <Request visible={visible} setVisible={setVisible} />
                </CommentBtn>
            </LikesContainer>
        </Card>
    )
}

export default Project;