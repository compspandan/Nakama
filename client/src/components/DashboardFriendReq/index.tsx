import { Col, Row } from 'antd';
import React, { FC } from 'react';
import Container from '../Container';
import { H2 } from '../Heading';
import Requests from './Requests';
import Empty from '../Empty';

interface IReq {
    user: any;
    comment: string;
}

interface Props {
    requestsReceived: IReq[]
}

const DashboardFriendReq: FC<Props> = ({ requestsReceived }) => {
    if (requestsReceived === [] || requestsReceived === undefined) {
        return (
            <Row>
                <Col xs={24} md={15}>
                    <Container style={{ margin: "15px" }}>
                        <H2>Requests</H2>
                        <Empty
                            description={"You currently have no requests."}
                        />
                    </Container>
                </Col>
                <Col xs={24} md={9} />
            </Row>

        )
    }
    else {
        return (
            <Row>
                <Col xs={24} md={15}>
                    <Container style={{ margin: "15px" }}>
                        <H2>Requests</H2>
                        {requestsReceived.map(({ user, comment }, index) => {
                            return (
                                <Requests
                                    key={index}
                                    title={index + 1}
                                    username={user.username}
                                    img={user.img}
                                    comment={comment}
                                />
                            )
                        })}
                    </Container>
                </Col>
                <Col xs={24} md={9} />
            </Row>
        )
    }
}

export default DashboardFriendReq;