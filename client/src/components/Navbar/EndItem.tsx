import { Avatar, Menu } from 'antd';
import { useStoreState } from 'easy-peasy';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown, { InnerText } from './Dropdown';
import { LinkBtn, LinkGroup } from './LinkBtn';
import MenuItem from './MenuItem';
import ProfileImg from '../../assets/profileimg.jpg';

const Container = styled.div`
    margin-left: auto;
    margin-right: 30px;
`;

const StyledLink = styled(Link)`
    margin-left: auto;
    margin-right: 30px;
    margin-bottom: 20px;
    color: white;
`;

const menu = (
    <Menu>
        <MenuItem key="signin">
            <a href="/signin">Sign In</a>
        </MenuItem>
        <MenuItem key="signup">
            <a href="/signup">Sign Up</a>
        </MenuItem>
    </Menu>
)

const EndItem = () => {
    const { loggedIn, user } = useStoreState((state: any) => state.auth);
    if (!loggedIn) {
        return (
            <Container>
                <LinkGroup>
                    <LinkBtn to="/signin">Sign In</LinkBtn>
                    <LinkBtn to="/signup">Sign Up</LinkBtn>
                </LinkGroup>
                <Dropdown arrow overlay={menu}>
                    <InnerText>
                        Join
                    </InnerText>
                </Dropdown>
            </Container>
        )
    }
    else {
        return (
            <StyledLink to="/dashboard">
                <Avatar size="large" src={user.img} />
            </StyledLink>
        )
    }
};


export default EndItem;