import styled from 'styled-components';
import { Button } from 'antd';

export const ReturnBtn = styled(Button)`
    color: white;
    background: #dc3545; /* fallback for old browsers */
    border-color: #dc3545;

    &:hover {
        color: white;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &::selection {
        color: white;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &:focus {
        color: white;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &:active {
        color: white;
        background-color: #c82333;
        border-color: #bd2130;
    }
`;

export const SubmitBtn = styled(Button)`
    color: white;
    background: #5cb85c; /* fallback for old browsers */
    border-color: #4cae4c;

    &:hover {
        color: white;
        background-color: #449d44;
        border-color: #398439;
    }

    &::selection {
        color: white;
        background-color: #449d44;
        border-color: #398439;
    }

    &:focus {
        color: white;
        background-color: #449d44;
        border-color: #398439;
    }

    &:active {
        color: white;
        background-color: #449d44;
        border-color: #398439;
    }
`;
