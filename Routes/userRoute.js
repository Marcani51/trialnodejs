const express = require('express');
const {addUser,getUser,deleteUser} = require('../Controller/userControl');
const router = express.Router();

router.post('/add_user',addUser);

router.get('/get_user',getUser);

router.delete('/delete_user/:id',deleteUser);

module.exports=router;

