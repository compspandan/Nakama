import styled from 'styled-components';

export default styled.div`
    width: 100%;
    border: 1px solid #f0f0f0;
    transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 20px;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    background: #fff;
    
    display: flex;

    &:hover {
        border-color: #0000;
        -webkit-box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }
`;