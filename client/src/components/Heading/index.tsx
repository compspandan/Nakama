import styled from 'styled-components';

const Heading = styled.h1``;

export const H1 = styled(Heading)`
    font-size: 35px;
`;

export const CenterH1 = styled(H1)`
    text-align: center;
    font-weight: 1000;
    margin-top: 30px;
`;

export const H2 = styled(Heading)`
    font-size: 30px;
    font-weight: 800;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export default Heading;
