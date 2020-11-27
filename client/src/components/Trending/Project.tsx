import { notification } from 'antd';
import { useStoreState } from 'easy-peasy';
import { ArrowUp } from 'phosphor-react';
import React, { FC, useState } from 'react';
import Card from './Card';
import Img from './Img';
import Likes, { CommentBtn, LikeBtn, LikesContainer } from './Likes';
import Request from './Request';
import { Desc, Skill, SkillContainer, Title } from './Text';

interface Props {
    _id: string;
    title: string;
    description: string;
    coverImg: string;
    skills: string[];
    tags: string[];
    likes: number;
    requestsReceived: any[];
}

const Project: FC<Props> = ({
    title,
    description,
    coverImg,
    skills,
    tags,
    likes,
    _id,
    requestsReceived,
}) => {
    const [votes, setVotes] = useState<number>(likes);
    const [voteVal, upvote] = useState<Boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const { loggedIn, user } = useStoreState((state: any) => state.auth);

    const openNotification = () => {
        notification.open({
            message: 'Please Log In!',
            description:
                'You can only like and request if you have an account on Nakama!',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const onRequest = (visible: boolean) => {
        if (loggedIn) {
            setVisible(visible);
        } else {
            openNotification();
        }
    };

    const onClick = () => {
        if (voteVal) {
            if (loggedIn) {
                upvote(false);
                setVotes(votes - 1);
            } else {
                openNotification();
            }
        } else {
            if (loggedIn) {
                upvote(true);
                setVotes(votes + 1);
            } else {
                openNotification();
            }
        }
    };

    return (
        <Card>
            <Img src={coverImg} alt={title} />
            <div>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
                <SkillContainer>
                    {skills.map((skill, dex) => {
                        if (dex <= 2)
                            return (
                                <Skill to={`/skills/${skill}`} key={dex}>
                                    {skill}
                                </Skill>
                            );
                        else return '';
                    })}
                </SkillContainer>
            </div>
            <LikesContainer>
                <LikeBtn onClick={onClick}>
                    <ArrowUp
                        size={23}
                        style={{ color: voteVal ? '#FF4500' : 'black' }}
                    />
                    <Likes>{votes}</Likes>
                </LikeBtn>
                <CommentBtn>
                    <Request
                        visible={visible}
                        setVisible={(visible: boolean) => onRequest(visible)}
                        user={user}
                        project_id={_id}
                        requestsReceived={requestsReceived}
                    />
                </CommentBtn>
            </LikesContainer>
        </Card>
    );
};

export default Project;
