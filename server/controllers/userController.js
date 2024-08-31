const User = require("../models/User")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');


// getUser

const createUser = async (req, res) => {
    try {
        const {name, email, password, age} = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({name, email, password: hashedPassword, age})
        await newUser.save();
        res.status(201).send('Successful creating')
    } catch {
        res.status(500).send('Server error')
    }
}

const checkUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send('Email and password are required');
        }
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send('Credential error');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.cookie('userToken', user._id.toString(), { httpOnly: false,});
            return res.status(200).json({message : 'Successful login'});
        } else {
            return res.status(401).send('Credential error');
        }
    } catch (error) {
        return res.status(500).send('Server error');
    }
};

const logOutUser = async (req, res) => {
    try {
        res.clearCookie('userToken')
        res.status(200).send('Succesful disconnected')
    } catch (error) {
        return res.status(500).send("Server error")
    }
}

const authenticateUser = async (req, res, next) => {
  const userId = req.cookies.userToken
    if (!userId) {
      return res.status(401).send('Unauthorized')
    }
  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(401).send('No such user')
    }else {
      const data = {
        name: user.name,
        email: user.email,
        age: user.age
      }
      return res.status(201).json(data)
    }
    next()
  } catch (error) {
    res.status(500).send('Error authenticating')
  }
}

module.exports = {
    createUser,
    checkUser,
    logOutUser,
    authenticateUser,
}