const express=require('express');
const multer=require('multer');
const userController=require('./../controller/user.controller');
const router=express.Router();

router.post('/createUser',userController.createUser);

module.exports=router;