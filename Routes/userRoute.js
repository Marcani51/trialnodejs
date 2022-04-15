const express = require('express');
const {addUser,getUser} = require('../Controller/userControl');
const router = express.Router();

router.post('/add_user',addUser);

router.get('/get_user',getUser);

module.exports=router;