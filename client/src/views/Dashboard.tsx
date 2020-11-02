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
import { Empty, Skeleton } from 'antd';


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
                        <DashboardFriendReq requestsReceived={changedReqRecieved} />
                    </Container>
                </DashBoardContainer>
            )
        }
    }
    else {
        return (
            <Empty
                description={
                    <div>
                        Not Implemented
                    </div>
                }
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