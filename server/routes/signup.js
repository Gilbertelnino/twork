import express from 'express';

const router = express.Router();
router.post('/', (req, res) => {
    const newEmployee = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        gender: req.body.gender,
        jobRole: req.body.jobRole,
        department: req.body.department,
        address: req.body.address,
      };
});