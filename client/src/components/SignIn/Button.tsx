import styled from 'styled-components';
import { Button } from 'antd';

export default styled(Button)`
    width: 122px;
    height: 50px;
    background: #5cb85c;  /* fallback for old browsers */
    border-color: #4cae4c;
    font-weight: 550;
    border-radius: 62px;
    
    &:hover {
        background-color: #449d44;
        border-color: #398439;
    }
    
    &::selection {
        background-color: #449d44;
        border-color: #398439;
    }
    
    &:focus {
        background-color: #449d44;
        border-color: #398439;
    }
    
    &:active {
        background-color: #449d44;
        border-color: #398439;
    }
`;


export const LogoBtn = styled.button`
    margin: 10px;
    height: 40px;
    border-width: 0;
    background: white;
    color: #737373;
    border-radius: 5px;
    white-space: nowrap;
    box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
    transition-property: background-color, box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    padding: 0;
    cursor: pointer;

    &:focus {
        box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
    }

    &:hover {
        box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background-color: #e5e5e5;
        box-shadow: none;
        transition-duration: 10ms;
    }
`;


export const GoogleBtnText = styled.span`
    display: inline-block;
    vertical-align: middle;
    padding: 0 24px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Roboto', arial, sans-serif;
`;

export const GoogleBtnIcon = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin: 8px 0 8px 8px;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
`;