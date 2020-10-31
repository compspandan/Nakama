import { Select } from 'antd';
import { useStoreActions } from 'easy-peasy';
import React from 'react';
import MediaQuery from 'react-responsive';
import coder from '../assets/undraw_code_review_l1q9.svg';
import Link from '../components/Navbar/Link';
import TA from '../components/Post/TextArea';
import Button from '../components/SignIn/Button';
import Heading, { HeadingMobile } from '../components/SignIn/Heading';
import Img, { ImgContainer } from '../components/SignIn/Img';
import Input, { SiginPassword } from '../components/SignIn/Input';
import Quote from '../components/SignIn/Quote';
import SignUpContainer, {
    SignUpSectionLeft,
    SignUpSectionRight
} from '../components/SignUp/Contain';
import Form from '../components/SignUp/Form';
import { Name } from '../components/SignUp/Name';
import axios from '../helpers/axios';
import history from '../helpers/history';


const SignUp = () => {
    const { logIn } = useStoreActions((actions: any) => actions.auth);

    const onSubmit = async (values: any) => {
        await axios.post('/users', values)
            .then(function ({ data }) {
                logIn(data.user);
                history.push('/dashboard');
            })
            .catch(function (err: any) {
                console.log(err);
                alert('Some error while signing up.');
            })
    };

    return (
        <SignUpContainer>
            <MediaQuery minDeviceWidth={1224}>
                <SignUpSectionLeft>
                    <Link to="/">
                        <Name>Nakama</Name>
                    </Link>
                    <Quote>
                        If we tried to think of a good idea, we wouldn’t have
                        been able to think of a good idea. You just have to find
                        the solution for a problem in your own life.
                        <br />
                        <strong>~ Brian Chesky. CEO of Airbnb.</strong>
                    </Quote>
                    <ImgContainer>
                        <Img src={coder} alt="coder" />
                    </ImgContainer>
                </SignUpSectionLeft>
            </MediaQuery>
            <SignUpSectionRight>
                <div style={{ margin: '0 0 20px 0' }}>
                    <Heading>Sign Up To Nakama</Heading>
                    <HeadingMobile>Sign Up</HeadingMobile>
                    <Form
                        layout="horizontal"
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your First Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            label="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="Set Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Set Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <SiginPassword />
                        </Form.Item>
                        <Form.Item
                            name="skills"
                            label="Skills"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter Skills!',
                                },
                            ]}
                        >
                            <Select
                                mode="tags"
                                style={{ width: '300px' }}
                                tokenSeparators={[',']}
                            />
                        </Form.Item>
                        <Form.Item name="university" label="University">
                            <Input />
                        </Form.Item>
                        <Form.Item name="bio" label="Bio">
                            <TA
                                maxLength={150}
                                placeholder=" Share more about yourself!  "
                                autoSize={{ minRows: 2, maxRows: 5 }}
                                style={{
                                    padding: '5px 15px 60px 0',
                                }}
                            />
                        </Form.Item>
                        <br />
                        {/* <Form.Item name="ProfilePic" label="Profile Pic">
                        <UploadImg/>
                        </Form.Item> */}
                        <Button type="primary" htmlType="submit" size="large">
                            Register
                        </Button>
                    </Form>
                </div>
            </SignUpSectionRight>
        </SignUpContainer>
    );
};

export default SignUp;
