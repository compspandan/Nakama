import { message, Popconfirm } from 'antd';
import { CheckCircle, XCircle } from "phosphor-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ApproveButton, ApproveContainer } from './Approve';
import Card from './Card';
import Img from './Img';

const Title = styled.h1`
    font-size: 22.5px;
    cursor: pointer;
    margin-bottom: 0;
    @media (max-width: 768px) {
        font-size: 17.5px;
        font-weight: 700;
    }
`;


export const Desc = styled.div`
    color: #6f6f6f;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;


export default function Requests(props: any) {
    const [checked, setChecked] = useState<Boolean>(false);
    const [rejected, setRejected] = useState<Boolean>(false);

    function onClick() {
        if (checked) setChecked(false);
        else setChecked(true);
    }

    function accept() {
        message.success('Click on Yes');
        setChecked(true)
    }
    
    function reject() {
        message.success('Click on Yes');
        setRejected(true)
    }
    
    function cancel() {
        message.error('Click on No');
    }

    return (
        <Card>
            <Img src={props.img} alt={props.username} />
            <div>
                <Title>{props.title}</Title>
                <Link to={`/user/${props.username}`}>{props.username}</Link>
                <Desc>{props.comment}</Desc>
            </div>
            <ApproveContainer>

                <Popconfirm
                    title="Are you sure to accept this request?"
                    onConfirm={accept}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <ApproveButton><CheckCircle size={30} style={{ color: checked ? "green" : "black" }} /></ApproveButton>
                </Popconfirm>
                <Popconfirm
                    title="Are you sure to reject this request?"
                    onConfirm={reject}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <ApproveButton><XCircle size={30} style={{ color: rejected ? "red" : "black" }} /></ApproveButton>
                </Popconfirm>
            </ApproveContainer>
        </Card>
    );
}