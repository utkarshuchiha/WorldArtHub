const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Working Fine")
})
router.use("/api", require("./ai"));
router.use("/user", require("./user"));
router.use("/post", require("./post"));

module.exports = router;
