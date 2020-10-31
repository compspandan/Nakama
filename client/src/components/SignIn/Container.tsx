import styled from 'styled-components';

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SignInSectionLeft = styled.section`
    background: #1488cc; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1488cc, #2b32b2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    flex: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SignInSectionRight = styled.section`
    position: relative;
    flex: 72%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DividerContainer = styled.div`
    margin: 40px 2.5%;
`;


export default styled.div`
    display: flex;
    min-height: 100vh;
`;
