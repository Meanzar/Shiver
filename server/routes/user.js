const express = require('express')
const {
    createUser,
    checkUser,
    logOutUser,
    authenticateUser,
} = require('../controllers/userController')
const router =  express.Router()



router.post('/signup', createUser)
router.post('/signin', checkUser)
router.post('/logout', logOutUser)
router.get('/auth', authenticateUser, (req, res ) => {
  res.send(`Welcome to the home, ${req.user.name}`)
})


module.exports = router