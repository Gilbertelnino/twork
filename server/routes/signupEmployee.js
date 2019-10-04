import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.post('/', (req,res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: 'something went wrong',
      });
    } else {
  const newEmployee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
    gender: req.body.gender,
    jobRole: req.body.jobRole,
    department: req.body.department,
    address: req.body.address,
  }
  
  jwt.sign( { newEmployee }, 'secretkey', (err, token) => {
    if(err){
      res.status(500).json({message: 'Server error'});
    }
    req.header('authorization');
    res.status(201).json({
    status: 201,
    message: 'User created successfully',
    data: {
      token,
    }
  })
  }
);
  
}
next()
  })
});
export default router;
