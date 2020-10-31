import { Input, Modal } from 'antd';
import { PaperPlaneTilt } from 'phosphor-react';
import React, { FC, useState } from 'react';
import { ReturnBtn, SubmitBtn } from './Btn';
import Text from './Text';
const { TextArea } = Input;



interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const Request: FC<Props> = ({ visible, setVisible }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [text, setText] = useState<string>("");

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        console.log(text); // handle req
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
            setText("");
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
                <TextArea value={text} onChange={(e) => setText(e.target.value)} rows={4} />
            </Modal>
        </>
    );
}

export default Request;
