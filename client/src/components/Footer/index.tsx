import React from 'react';
import StyledFooter from './StyledFooter';
import Linked from './Link';
import Right from './Right';
import MediaQuery from 'react-responsive';

const Footer = () => {
    return (
        <StyledFooter>
            <MediaQuery minDeviceWidth={1224}>
                <ul>
                    <MediaQuery minDeviceWidth={1224}>
                        <Right
                            style={{
                                float: 'left',
                                fontSize: '18px',
                                fontWeight: 'bolder',
                            }}
                        >
                            <li>
                                <Linked to="/">Nakama Technologies</Linked>
                            </li>
                        </Right>
                    </MediaQuery>
                    <Right style={{ float: 'right', margin: '5px 0 0 0' }}>
                        <li>
                            <Linked to="/" style={{ paddingLeft: '50px' }}>
                                Facebook
                            </Linked>
                            <Linked to="/" style={{ paddingLeft: '50px' }}>
                                Instagram
                            </Linked>
                            <Linked to="/" style={{ paddingLeft: '50px' }}>
                                Linkedin
                            </Linked>
                        </li>
                    </Right>
                </ul>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div style={{ textAlign: 'center' }}>
                    <Linked to="/">Nakama Technologies</Linked>
                </div>
                <Right style={{ float: 'right', margin: '5px 0 0 0' }}>
                    <li>
                        <Linked to="/" style={{ paddingLeft: '50px' }}>
                            Facebook
                        </Linked>
                        <Linked to="/" style={{ paddingLeft: '50px' }}>
                            Instagram
                        </Linked>
                        <Linked to="/" style={{ paddingLeft: '50px' }}>
                            Linkedin
                        </Linked>
                    </li>
                </Right>
            </MediaQuery>
        </StyledFooter>
    );
};

export default Footer;
