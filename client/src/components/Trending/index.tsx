import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Col, Row, Skeleton } from 'antd';
import styled from 'styled-components';
import Project from './Project';
import { useQuery } from 'react-query'
import axios from '../../helpers/axios';
import SideTren from './SideTren';

const TrendingComp = styled.div`
    background-color: #C4C4C4;
    margin-top: 18px;
    padding: 8px 0;
    height : 30vw;
`;



const Trending = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })
    //window.addEventListener('resize',findScreenSize) 

    const { isLoading, error, data } = useQuery('allProjects', () =>
        axios.get('/project').then(res =>
            res.data
        )
    )


    if (isLoading) return (
        <div>
            {isSmallScreen &&
                <div>
                    <Row>
                        <Col className="gutter-row" span={24}>
                        <SideTren />
                            <Skeleton active />
                        </Col>
                    </Row>
                </div>
            }
            {isDesktopOrLaptop && //minimumDeviceWidth required to render this component
                <div>
                    <Row gutter={18}>
                        <Col className="gutter-row" md={16}>
                            <Skeleton active />
                        </Col>
                        <Col className="gutter-row" md={8}>
                        <SideTren />
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )

    const { projects } = data;

    return (
        <div>
            {isSmallScreen &&
                <div>
                    <Row>
                        <Col className="gutter-row" span={24}>
                        <SideTren />
                            {projects.map((project: any, dex: number) => (
                                <Project
                                    key={dex}
                                    title={project.title}
                                    description={project.description}
                                    coverImg={project.coverImg}
                                    skills={project.skills}
                                    tags={project.tags}
                                    likes={project.likes}
                                    _id={project._id}
                                    requestsReceived={project.requestsReceived}
                                />
                            ))}
                        </Col>
                    </Row>
                </div>
            }
            {isDesktopOrLaptop && //minimumDeviceWidth required to render this component
                <div>
                    <Row gutter={18}>
                        <Col className="gutter-row" md={16}>
                            {projects.map((project: any, dex: number) => (
                                <Project
                                    key={dex}
                                    title={project.title}
                                    description={project.description}
                                    coverImg={project.coverImg}
                                    skills={project.skills}
                                    tags={project.tags}
                                    likes={project.likes}
                                    _id={project._id}
                                    requestsReceived={project.requestsRequired}
                                />
                            ))}
                        </Col>
                        <Col className="gutter-row" md={8}>
                        <SideTren />
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )
}

export default Trending;
