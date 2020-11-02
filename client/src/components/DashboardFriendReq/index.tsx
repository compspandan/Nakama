import { Col, Row } from 'antd';
import React, { FC } from 'react';
import Container from '../Container';
import { H2 } from '../Heading';
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

interface IReq {
    user: any;
    comment: string;
}

interface Props {
    requestsReceived: IReq[]
}

const DashboardFriendReq: FC<Props> = ({ requestsReceived }) => {

    return (
        <Row>
            <Col xs={24} md={15}>
                <Container style={{ margin: "15px" }}>
                    <H2>Requests</H2>
                    {
                        requestsReceived.map(function (request, index) {
                            return (
                                <Requests
                                    key={index}
                                    title={index + 1}
                                    username={request.user.username}
                                    img={request.user.img}
                                    comment={request.comment}
                                />
                            )
                        })
                    }
                </Container>
            </Col>
            <Col xs={24} md={9} />
        </Row>
    )
}

export default DashboardFriendReq;