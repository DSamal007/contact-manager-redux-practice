const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/UsersController')
const contactsController = require('../app/controllers/contactsController')

const { authenticateUser } = require('../app/middlewares/authentication')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/contacts', authenticateUser, contactsController.list)
router.post('/contacts', authenticateUser, contactsController.create)
router.get('/contacts/:id', authenticateUser, contactsController.show)
router.put('/contacts/:id', authenticateUser, contactsController.update)
router.delete('/contacts/:id', authenticateUser, contactsController.destroy) 

module.exports = router
