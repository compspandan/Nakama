import React from 'react';
import styled from 'styled-components';
import Section from '../components/LandingPage/LandingPg';
import Page from '../components/Page';
import SearchBar from '../components/SearchBar';
import Trending from '../components/Trending';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
 
const queryCache = new QueryCache()

const H1 = styled.h1`
    font-size: 300%;
    font-weight:1000;
    @media (max-width:768px) {
        font-size: 200%;
    }
`;


const P = styled.p`
    margin: 2.5px 25%;
    font-size: 150%;
    font-weight: 500;
    line-height: 170%;
    @media (max-width:768px) {
        margin: 2.5px 10%;
        font-size: 115%;
        line-height: 120%;
    }
`;


const IndexPage = () => {

    return (
        <Page>
            <Section>
                <H1 style={{ color: "white" }}>A new way to collaborate</H1>
                <P>
                    With Nakama, you can post your idea for a project and find skilled people to work with.
                </P>
                <P>
                    Our mission is to help you build innovative projects by connecting engineers and designers from all around the world.
                </P>
                <SearchBar isLeft placeholder="Discover new projects . . . " />
            </Section>
            <div style={{ padding: "5% 5%" }}>
                <H1 style={{ color: "black" }}>Trending</H1>
                <ReactQueryCacheProvider queryCache={queryCache}>
                    <Trending />
                </ReactQueryCacheProvider>
            </div>
        </Page>
    );
};

export default IndexPage;
