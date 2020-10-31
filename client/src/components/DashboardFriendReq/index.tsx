import { Col, Row } from 'antd';
import React from 'react';
import Container from '../Container';
import { H2 } from '../Heading';
import Friends from './Friends';
import Requests from './Requests';

const projects = [
    {
        title: "E-Commerce Website",
        requestsReceived: [
            {
                user: {
                    username: "johnk",
                    img: "https://miro.medium.com/max/3200/1*_aV1RSXfZYdvT5gfDUblCA.jpeg"
                },
                comment: "Hello interested in working with you"
            },
            {
                user: {
                    username: "amyy",
                    img: "https://miro.medium.com/max/3200/1*_aV1RSXfZYdvT5gfDUblCA.jpeg"
                },
                comment: "Hello interested in this proj"
            }
        ]
    },
    {
        title: "Music Genre Classification",
        requestsReceived: [
            {
                user: {
                    username: "johnk",
                    img: "https://miro.medium.com/max/3200/1*_aV1RSXfZYdvT5gfDUblCA.jpeg"
                },
                comment: "Hello interested in working with you"
            },
            {
                user: {
                    username: "amyy",
                    img: "https://miro.medium.com/max/3200/1*_aV1RSXfZYdvT5gfDUblCA.jpeg"
                },
                comment: "Hello interested in nothing"
            }
        ]
    }
]


const DashboardFriendReq = () => {
    return (
        <Row>
            <Col xs={24} md={15}>
                <Container style={{ margin: "15px" }}>
                    <H2>Requests</H2>
                    {
                        projects.map(function (project, dex) {
                            const title = project.title
                            return (
                                project.requestsReceived.map(function (request, index) {
                                    return (
                                        <Requests
                                            key={index}
                                            title={title}
                                            username={request.user.username}
                                            img={request.user.img}
                                            comment={request.comment}
                                        />
                                    )
                                })
                            )
                        })
                    }
                </Container>
            </Col>
            <Col xs={24} md={9}>
                <Container style={{ margin: "15px" }}>
                    <H2>Friends</H2>
                    <Friends />
                </Container>
            </Col>
        </Row>
    )
}

export default DashboardFriendReq;