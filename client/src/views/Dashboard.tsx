import React, { useState, FC } from 'react';
import { SliderPage } from '../components/Page';
import Container, { DashBoardContainer } from '../components/Container';
import DashboardFriendReq from '../components/DashboardFriendReq';
import { CenterH1, H2 } from '../components/Heading';
import Post from '../components/Post';
import DashboardActiveProjects from '../components/DashboardActiveProjects';
import { ReactQueryCacheProvider, QueryCache, useQuery } from 'react-query';
import { useStoreState } from 'easy-peasy';
import axios from '../helpers/axios';
import { Skeleton } from 'antd';


const queryCache = new QueryCache()

interface RenderProps {
    choice: string;
    setChoice: (choice: string) => void;
}

const RenderContent: FC<RenderProps> = ({ choice, setChoice }) => {
    const { user } = useStoreState((state: any) => state.auth);

    const { isLoading, error, data } = useQuery('user', () =>
        axios.get(`/project/`).then(res =>
            res.data
        )
    )


    const projects = [
        {
            title: "Stock Price Prediction",
            description: "Predict the future price of the stock market based on the previous year’s data using deep learning.",
            coverImg: "data:image/jpeg;base64,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",
            skills: ["PyTorch", "Pandas"],
            tags: ["Machine Learning"],
            teamMembers: ['Satwick']
        },
        {
            title: "E-Commerce Website",
            description: "A powerful E-Commerce website with fully implemented payments.",
            coverImg: "https://mk0sgwebpartner1j67n.kinstacdn.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
            skills: ["React", "PostGreSQL", "Node.js", "Express.js", "GraphQL"],
            tags: ["Web Development"],
            teamMembers: ['Varun', 'Spandan', 'Satwick']
        },
        {
            title: "Music Genre Classification",
            description: "Use NLP to automatically classify different musical genres from given audio.",
            coverImg: "https://miro.medium.com/max/3200/1*_aV1RSXfZYdvT5gfDUblCA.jpeg",
            skills: ["Tensorflow", "Keras", "Git"],
            tags: ["Machine Learning", "Software Development"],
            teamMembers: ['Spandan', 'Satwick']
        },
    ]

    if (choice === "post") return <Post func={setChoice} />;
    else {
        if (isLoading) {
            return (
                <DashBoardContainer>
                    <CenterH1>Dashboard</CenterH1>
                    <Container>
                        <H2>Active Projects</H2>
                        <Skeleton active />
                    </Container>
                </DashBoardContainer>
            )
        }
        else {
            const { requestsReceived, username } = user;
            const activeProjects = data.projects.map((project: any) => {
                if(project.teamLeader) {
                    return (project.teamLeader.username === username)
                }
                else {
                    return false;
                }
            });

            console.log(activeProjects, requestsReceived);
            return (
                <DashBoardContainer>
                    <CenterH1>Dashboard</CenterH1>
                    <Container>
                        <H2>Active Projects</H2>
                        <DashboardActiveProjects
                            projects={projects}
                        />
                        <DashboardFriendReq requestsReceived={requestsReceived} />
                    </Container>
                </DashBoardContainer>
            )
        }
    }
}


const Dashboard = () => {
    const [choice, setChoice] = useState<string>("dashboard");
    return (
        <SliderPage setChoice={setChoice}>
            <Container>
                <ReactQueryCacheProvider queryCache={queryCache}>
                    <RenderContent choice={choice} setChoice={setChoice} />
                </ReactQueryCacheProvider>
            </Container>
        </SliderPage>
    )
}

export default Dashboard;