import { Select, Tooltip } from 'antd';
import React from 'react';
import Hr from './heading';
import Name from './Name';
import Tag from './Tag';
import TA from './TextArea';
import UploadImg from './UploadImg';
import Button from '../SignIn/Button';
import Input from '../SignIn/Input';
import Form from '../SignUp/Form';
import axios from '../../helpers/axios'
import {useStoreState} from 'easy-peasy'


const Post = (props:any) => {
    const {user}  = useStoreState((state:any)=> state.auth);
    const onSubmit = async (values: any) => {
        values.teamLeader = user;
        await axios.post('/project',values)
        .then(function(response){

            props.func("dashboard");
        })
        .catch(function(err:any){
            console.log(err)
            alert(err)
        })
        //console.log(values);
    };
    return (
        <div>
            <Hr>
                <Name>Post a project</Name>
                <Tag>Make your ideas come true.</Tag>
            </Hr>
            <div
                style={{
                    display: 'block',
                    textAlign: 'center',
                    margin: '0 15px',
                }}
            >
                <Form
                    layout="horizontal"
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}  
                    style={{ display: 'inline-block', margin: '20px 0' }}
                >
                    <Form.Item
                        name="title"
                        label={
                            <Tooltip title="A meaningful title would help gain more traction.">
                                Title
                            </Tooltip>
                        }
                    >
                        <Input/>
                    </Form.Item>
                    <br />
                    <Form.Item
                        name="description"
                        label={
                            <Tooltip title="A description will help others understand more about the project.">
                                Description
                            </Tooltip>
                        }
                    >
                        <TA
                            maxLength={300}
                            placeholder="  Description of the project."
                            autoSize={{ minRows: 2, maxRows: 5 }}
                            style={{
                                padding: '5px 2px 60px 0',
                            }}
                        />
                    </Form.Item>
                    <br />
                    <Form.Item
                        name="projectLink"
                        label={
                            <Tooltip title="If working with a public repository a link to the repository would be helpful.">
                                Project Link
                            </Tooltip>
                        }
                    >
                        <Input/>
                    </Form.Item>
                    <br />
                    <Form.Item
                        name="skills"
                        label={
                            <Tooltip title="List of skills that you expect the teammates to know.">
                                Prerequisite Skills
                            </Tooltip>
                        }
                    >
                        <Select
                            mode="tags"
                            tokenSeparators={[',']}
                            style={{ width: '300px'}}
                        ></Select>
                    </Form.Item>
                    <br />
                    <Form.Item
                        name="tags"
                        label={
                            <Tooltip title="Categories or tags in which the project belongs. This makes it easier to filter the project.">
                                Tags
                            </Tooltip>
                        }
                    >
                        <Select
                            mode="tags"
                            tokenSeparators={[',']}
                            style={{ width: '300px'}}
                        ></Select>
                    </Form.Item>
                    <br />
                    {/* <Form.Item
                        name="ProjImg"
                        label={
                            <Tooltip title="An optional field for users who want to use a project pic.">
                                Project Image
                            </Tooltip>
                        }
                    >
                        <UploadImg />
                    </Form.Item> */}
                    <Button type="primary" htmlType="submit" size="large">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Post;
