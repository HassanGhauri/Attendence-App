const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const Routes = require("./routes/Projectroute");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

app.use("/api",Routes);

mongoose.connect(process.env.MongoDB_Url)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected to DB and listening to port ${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })







