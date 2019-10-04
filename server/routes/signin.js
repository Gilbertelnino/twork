import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import signupVal from '../Helpers/employeeVal';

const router = express.Router();
router.post('/', (req, res, next) => {
    signupVal.findOne({email: req.body.email}, (err, user) => {
        if(err){
            res.status(500).json({
                status: 500,
                message: 'server err',
            });
        }
        if(!user){res.status(404).json({
           status: 404,
           message: 'NOT FOUND',
        })
    }
    const passwordValid = bcrypt.compareSync(req.body.password, user.password);
    if(!passwordValid) {
        res.status(401).json({
            token: null
        });
    }
    const token = jwt.sign(user.id, 'secretword', {
        expiresIn:  86400
    });
    res.status(200).json({
        status:200,
        message: 'User successfully logged in',
        data:{
            token,
        }
    });
    });
});
export default router;