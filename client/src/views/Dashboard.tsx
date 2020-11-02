import { Skeleton } from 'antd';
import { useStoreState } from 'easy-peasy';
import React, { FC, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query';
import Container, { DashBoardContainer } from '../components/Container';
import DashboardActiveProjects from '../components/DashboardActiveProjects';
import DashboardFriendReq from '../components/DashboardFriendReq';
import Empty from '../components/Empty';
import { CenterH1, H2 } from '../components/Heading';
import { SliderPage } from '../components/Page';
import Post from '../components/Post';
import axios from '../helpers/axios';


const queryCache = new QueryCache()

interface RenderProps {
    choice: string;
    setChoice: (choice: string) => void;
}

const RenderContent: FC<RenderProps> = ({ choice, setChoice }) => {
    const { user } = useStoreState((state: any) => state.auth);

    const { isLoading, data } = useQuery('user', () =>
        axios.get(`/project/`).then(res => res.data)
    )

    if (choice === "post") return <Post setChoice={setChoice} user={user} />;
    else if (choice === "dashboard") {
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
            const { projects } = data;
            const activeProjects = projects.filter((project: any) => {
                const { teamLeader } = project;
                if (teamLeader) {
                    return (teamLeader.username === username);
                }
                else return false;
            });

            return (
                <DashBoardContainer>
                    <CenterH1>Dashboard</CenterH1>
                    <Container>
                        <H2>Active Projects</H2>
                        <DashboardActiveProjects
                            projects={activeProjects}
                        />
                        <DashboardFriendReq requestsReceived={requestsReceived} />
                    </Container>
                </DashBoardContainer>
            )
        }
    }
    else {
        return (
            <Empty
                description={"Not Implemented"}
            />
        )
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