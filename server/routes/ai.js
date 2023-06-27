const express=require('express');
const router=express.Router();
const {generate}=require('../controller/ai');


router.post('/v1/generate',generate);


module.exports=router;