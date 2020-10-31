import { Input } from 'antd';
import Password from 'antd/lib/input/Password';
import styled from 'styled-components';

export default styled(Input)`
    width: 300px;
    border-radius: 18px;
`;

export const SiginPassword = styled(Password)`
    width: 300px;
    margin: 0 0 0 3px;
    border-radius: 18px;
`;