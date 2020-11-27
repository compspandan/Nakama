import React, { FC } from 'react';
import { Empty } from 'antd';
import Container from './Container';

interface Props {
    description: string;
}

const StyledEmpty: FC<Props> = ({ description }) => {
    return (
        <Container>
            <Empty description={description} />
        </Container>
    );
};

export default StyledEmpty;
