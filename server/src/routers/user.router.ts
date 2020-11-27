import { Router } from 'express';
import {
    authUser,
    createUser,
    deleteAllUsers,
    deleteUser,
    getUser,
    getUserList,
    patchUser,
    putUser,
} from '../controllers/user.controller';
const router = Router();

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, 'uploads');
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, file.fieldname + '-' + Date.now());
    },
});

var upload = multer({ storage: storage });

router.get('/', getUserList); //gets list of all users in database
router.post('/', upload.single('image'), createUser); // creates one user in database
router.delete('/', deleteAllUsers); //deletes all users in database
router.get('/:userName', getUser); //gets one user's data from database
router.put('/:userName', putUser);
router.post('/auth/', authUser);
router.patch('/:userName', patchUser); //completely updates one user's data based on new data sent
router.delete('/:userName', deleteUser); //deletes one user based on username specified in request params

export default router;
