const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const { createHash } = require('crypto');

const AdminUser = require('../../models/AdminUser');
const Conductor = require('../../models/Conductor');
const User = require('../../models/User');

const JWT_SECRET = "qsmUaX4kKHFaZvQVFYLQh2GnTNrmj0H0gvnOUiKPIdVoLAbfIAN1gUNVZVsIvnuhSU3TFFI1b1PMKKPy6A0cc9zh5NQSCMnfZmkrPX54W9a9Tc0gHj3t4n3AxowTRKxTYf3z5cwt0TstGdRM3bhHCcRDLGBkLi0LOvJBXJNAlaQQj7JfSLzAvSDx0bvgtf0H1zZBBqpkqcIStlNVZaBQ6M4SBunnUkjnJFSFwyIzNQ0creaAfpHN8Uqf0egPtY01c"

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

router.post('/', async(req, res) => {
 
    let body = req.body;

    let username = body['username'];
    let password = body['password'];

    password = hash(password);

    // if username exists

    let theUser = await User.find({_id: username})
    if(theUser.length != 0)
    {
        return res.status(401).json({
            message: "Username already exists!"
        })
    }

    theUser = await User.find({aadharNumber: body['aadharNumber']})
    if(theUser.length != 0)
    {
        return res.status(401).json({
            message: "Aadhar Card Number already exists!"
        })
    }

    let data = {
        _id: username,
        password,
        name: body['name'],
        email: body['email'],
        phoneNumber: body['phoneNumber'],
        aadharNumber: body['aadharNumber']
    }

    let newUser = await User.create(data);

    newUser['role'] = 'user'

    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 100),
        data: {data:newUser, role: 'user'}
      }, JWT_SECRET);


    return res.status(201).json({
        message: "Registration Successful",
        token
    });
});

module.exports = router;