import { Input, Modal } from 'antd';
import { PaperPlaneTilt } from 'phosphor-react';
import React, { FC, useState } from 'react';
import axios from '../../../helpers/axios';
import { ReturnBtn, SubmitBtn } from './Btn';
import Text from './Text';
const { TextArea } = Input;



interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    user: any;
    project_id: string;
    requestsReceived: any[];
}

const Request: FC<Props> = ({ visible, setVisible, user, project_id, requestsReceived }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        if (comment === "") return;
        if (requestsReceived === undefined) await axios.put(`/project/${project_id}`, { requestsReceived: [{ user, comment }] });
        else await axios.put(`/project/${project_id}`, { requestsReceived: [...requestsReceived, { user, comment }] });
        setLoading(true);
        console.log(comment); // handle req
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
            setComment("");
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <PaperPlaneTilt size={23} onClick={showModal} />
            <Modal
                visible={visible}
                title="Send a Request"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <ReturnBtn key="back" onClick={handleCancel}>
                        Cancel
                    </ReturnBtn>,
                    <SubmitBtn key="submit" onClick={handleOk}>
                        Submit
                    </SubmitBtn>
                ]}
            >
                <Text>
                    Write a small description about why you want to work on this project!
                </Text>
                <TextArea value={comment} onChange={(e) => setComment(e.target.value)} rows={4} />
            </Modal>
        </>
    );
}

export default Request;
