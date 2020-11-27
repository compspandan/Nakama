import { Dropdown } from 'antd';
import styled from 'styled-components';

export default styled(Dropdown)`
    display: none;
    @media only screen and (max-width: 768px) {
        display: inline;
    }
`;

export const InnerText = styled.div`
    font-weight: 600;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 5px;
    color: black;
    background-color: white;
    height: 20px;
`;
