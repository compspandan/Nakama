import { Bell, ChatText, Cube, Gear, Plus, User } from 'phosphor-react';
import React, { FC, ReactNode, useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Sider, { EndItem, StyledItem, StyledMenu } from '../Sider';
import Content from './Content';
import Layout, { DefaultLayout } from './Layout';


interface SiderProps {
    children: ReactNode;
    setChoice: (choice: string) => void;
}

interface Props {
    children: ReactNode;
}


const Page: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Navbar />
            <Content>
                {children}
            </Content>
            <Footer />
        </Layout>
    )
}


export const SliderPage: FC<SiderProps> = ({ setChoice, children }) => {
    const [sliderWidth, setSliderWidth] = useState("5%");
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    setSliderWidth(broken ? "20%" : "5%")
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                width={sliderWidth}
            >
                {/* <div className="logo" />  */}
                {/* add logo here  */}
                <StyledMenu>
                    <StyledItem key="0" onClick={() => setChoice("dashboard")}>
                        <Cube size={32} />
                    </StyledItem>
                    <StyledItem key="1">
                        <User size={32} />
                    </StyledItem>
                    <StyledItem key="2">
                        <ChatText size={32} />
                    </StyledItem>
                    <StyledItem key="3">
                        <Bell size={32} />
                    </StyledItem>
                    <StyledItem key="4" onClick={() => setChoice("post")}>
                        <Plus size={32} />
                    </StyledItem>
                    <EndItem key="5">
                        <Gear size={32} />
                    </EndItem>
                </StyledMenu>
            </Sider>
            <DefaultLayout>
                <Navbar />
                <Content>
                    {children}
                </Content>
                <Footer />
            </DefaultLayout>
        </Layout>
    )
}

export default Page;