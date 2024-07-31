const express = require("express");
const router = express.Router();


router.get("/",function(req,res){
    res.send("this is homepage");
})

router.get("/about",function(req,res){
    res.send("this is about");
})

router.get("/contact",function(req,res){
    res.send("this is contact");
})



module.exports = router;