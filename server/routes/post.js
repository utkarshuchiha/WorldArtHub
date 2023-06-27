const express=require('express');
const router=express.Router();
const postController=require('../controller/post');
const {verifyToken}=require("../config/jwt")


router.post("/create-post",verifyToken,postController.create);
router.get("/all-posts",postController.allPosts);

module.exports=router;