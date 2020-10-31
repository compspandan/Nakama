import { Layout } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;


export default styled(Header)`
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    color: white;
    background: #1488cc; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1488cc, #2b32b2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    // removes highlighting
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

`;