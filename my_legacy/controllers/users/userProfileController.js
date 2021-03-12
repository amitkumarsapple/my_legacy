// var db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const userProfile = require('../../models/users/usersProfileModel')


exports.registerUser = async(req, res) => {
    const user = new userProfile(req.body)
    try {
        await user.save()
        res.status(201).send({ message: 'New user saved successfully', data: user })
    } catch (error) {
        res.status(400).send({ message: 'Could not create new user some error occured', error })
    }
}

exports.loginUser = async(req, res) => {
    res.send('login')
}