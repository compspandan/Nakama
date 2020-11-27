import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';
var fs = require('fs');
var path = require('path');

async function getUserList(req: Request, res: Response) {
    await User.find(function (err, userList: [IUser]) {
        if (!err) {
            res.json({
                userList: userList,
                message: 'successfully got users list',
            }).status(200);
        } else res.json({ err, message: 'Some error occured in getting users list' }).status(404);
    });
}

async function createUser(req: any, res: Response) {
    //console.log(path.join(__dirname + '/uploads/' + req.file.filename))
    //console.log(req.body);
    //console.log(req.file);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        university: req.body.university,
        qualification: req.body.qualification,
        bio: req.body.bio,
        skills: req.body.skills,
        img: req.body.img,
        // img: {
        //     data: null,
        //     contentType: null,
        // },
    });
    // if (req.file != undefined) {
    //     newUser.img.data = fs.readFileSync(
    //         path.join('uploads/' + req.file.filename)
    //     );
    //     newUser.img.contentType = 'image/png';
    //     fs.unlink(path.join('uploads/' + req.file.filename), (err: any) => {
    //         if (err) throw err;
    //         console.log('image was deleted');
    //     });
    // }

    await newUser.save(function (err: any, user: IUser) {
        if (!err) {
            res.json({
                user: user,
                message: 'Successfully saved user!',
            }).status(200);
        } else {
            res.json({ err, message: 'Error in creating user' }).status(404);
        }
    });
}

async function getUser(req: Request, res: Response) {
    await User.findOne(
        { username: req.params.userName },
        function (err, user: IUser) {
            if (!err) {
                if (user) {
                    res.json({
                        user,
                        message: 'Successfully found user.',
                    }).status(200);
                } else {
                    res.json({
                        err: 'No user exists',
                        message: 'No such user.',
                    }).status(404);
                }
            } else
                res.json({
                    err,
                    message: 'Some error occured in getting user',
                }).status(404);
        }
    );
}

async function authUser(req: Request, res: Response) {
    const { username, password } = req.body;
    await User.findOne({ username, password }, function (err, user: IUser) {
        if (!err) {
            if (user) {
                res.json({
                    user,
                    message: 'Successfully found user.',
                }).status(200);
            } else {
                res.json({
                    err: 'No user exists',
                    message: 'No such user.',
                }).status(404);
            }
        } else
            res.json({
                err,
                message: 'Some error occured in getting user',
            }).status(404);
    });
}

async function putUser(req: Request, res: Response) {
    await User.replaceOne(
        { username: req.params.userName },
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            university: req.body.university,
            qualification: req.body.qualification,
            bio: req.body.bio,
            skills: req.body.skills,
            img: req.body.img,
        },
        function (err, user: IUser) {
            if (!err) {
                res.json({
                    user: user,
                    message: 'successfully updated user',
                }).status(200);
            } else
                res.json({
                    err,
                    message: 'Some error occured in updating user',
                }).status(404);
        }
    );
}

async function patchUser(req: Request, res: Response) {
    console.log(req.body);
    await User.updateOne(
        { username: req.params.userName },
        { $set: req.body },
        function (err, user: IUser) {
            if (!err) {
                res.json({
                    user: user,
                    message: 'successfully updated specified records of user',
                }).status(200);
            } else
                res.json({
                    err,
                    message: 'Some error occured in updating user',
                }).status(404);
        }
    );
}

async function deleteUser(req: Request, res: Response) {
    await User.deleteOne({ username: req.params.userName }, function (err) {
        if (!err) {
            res.json({ message: 'successfully deleted user' }).status(200);
        } else res.json({ err, message: 'Some error occured in deleting user' }).status(404);
    });
}

async function deleteAllUsers(req: Request, res: Response) {
    await User.deleteMany(function (err: any) {
        if (!err) {
            res.json({ message: 'Succesfully deleted all users' }).status(200);
        } else res.json({ err, message: 'Some error occured in deleting all users' }).status(404);
    });
}

export {
    getUserList,
    createUser,
    deleteAllUsers,
    getUser,
    putUser,
    patchUser,
    authUser,
    deleteUser,
};
