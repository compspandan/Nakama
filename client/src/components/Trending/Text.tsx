import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    font-size: 22.5px;
    cursor: pointer;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 17.5px;
        font-weight: 700;
    }
`;

export const Desc = styled.div`
    color: #6f6f6f;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const SkillContainer = styled.div`
    color: #6f6f6f;

    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

export const Skill = styled(Link)`
    margin: 0 5px;
`;
