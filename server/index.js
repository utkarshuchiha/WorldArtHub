const express = require("express");
const db = require("./config/mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes"));
app.use("/test",(req,res)=>{
    res.send("working");
})

app.listen(8000, () => {
  console.log("server is up and running on port 8000");
});
