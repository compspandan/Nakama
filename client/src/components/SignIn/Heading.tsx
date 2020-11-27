import styled from 'styled-components';

const Heading = styled.h1`
    margin-bottom: 5%;
    font-family: Palanquin;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 116px;
    text-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeadingMobile = styled.h1`
    display: none;
    margin-bottom: 5%;
    font-family: Palanquin;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 116px;
    text-align: center;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const Name = styled.h1`
    color: white;
    padding: 20px 0 0 20px;
    font-weight: bolder;
    font-size: 35px;
    margin-bottom: 40px;
`;

export default Heading;
