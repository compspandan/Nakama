import { model, Schema, Document } from 'mongoose';
import userModel, { IUser } from './user.model';

interface IReq extends Document {
    user: IUser;
    comment: String;
}

export interface IProject extends Document {
    title: String;
    teamLeader:IUser,
    members: IUser[];
    description: String;
    coverImg: String;
    skills: String[];
    tags: String[];
    requestsReceived: IReq[];
    requestsSent: IReq[];
    presentation: String;
    projectLink: String;
    likes: Number;
}

const projectSchema: Schema = new Schema({
    title: String,
    teamLeader:userModel.schema,
    members: [userModel.schema],
    description: String,
    coverImg: String,
    skills: [String],
    tags: [String],
    requestsReceived: [{ user: userModel.schema, comment: String }],
    requestsSent: [{ user: userModel.schema, comment: String }],
    presentation: String,
    projectLink: String,
    likes: Number,
});

export default model<IProject>('project', projectSchema);
