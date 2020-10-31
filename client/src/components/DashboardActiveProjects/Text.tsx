import styled from 'styled-components';


export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 17.5px;
        font-weight: 700;
    }
`;

export const Desc = styled.div`
    color: #6f6f6f;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;