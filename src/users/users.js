const express = require('express') 
const router = express.Router() ; 
const userController = require('../controller/users')



//Create - POST
router.post('/' , userController.createNewUsers)

//Read - GET
router.get('/' , userController.getAllUsers)

//Update - PATCH
router.patch('/:id' , userController.updateUser ) 

//Delete - DELETE
router.delete('/:id' , userController.deleteUser)
 
module.exports = router ; 