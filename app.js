const dotenv = require("dotenv");
dotenv.config({path:"./.env"});

const express= require("express");
const app = express();


const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})