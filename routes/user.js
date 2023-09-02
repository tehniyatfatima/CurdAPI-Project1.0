const express = require('express');
const router = express.Router();
const {createUser, getUser, getUsers, deleteUser, updateUser} = require('../Controllers/user.js')


// get all users
router.get('/', getUsers);

// get route for one specific user
router.get("/:id", getUser)

//post user
router.post('/',  createUser);

// delete Route

router.delete("/:id" ,deleteUser)

// Patch Route 
router.patch("/:id", updateUser )


module.exports = router;