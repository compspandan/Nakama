import { model, Schema, Document } from 'mongoose';

export interface IUser extends Document
{
    firstName:String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    university: String,
    qualification: String,
    bio : String,
    skills: String[],
    img: String
}

const userSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: false, required: true },
    username: { type: String, unique: false, required: true },
    password: String,
    university: String,
    qualification: String,
    bio: String,
    skills: [String],
    img: String
});

export default model<IUser>('user', userSchema);
