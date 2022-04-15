const express = require('express');
const {addUser,getUser} = require('../Controller/userControl');
const router = express.Router();

router.post('/:id/add_user',addUser);

router.get('/:id/get_user',getUser);

module.exports=router;