import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(Link)`
    margin: 0 5px;
    color: black;
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 600;
    &:hover {
        color: black;
    }
`;

export const LinkGroup = styled.div`
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
