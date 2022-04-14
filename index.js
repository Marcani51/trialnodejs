const express = require("express");
const app = express();
const port = 4200;
const cors = require("cors");
require("dotenv").config();
const User = require("./Models/user");


///connect ke db
const connectDb = require("./config/db");
connectDb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/user", async (req,res)=>{
    try {
        const user = await User.findById({_id: "62585a752f6467e843971e34"});
        let userName;
        userName= user.name;

        console.log(userName);
        res.json(user);        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
  console.log(`hello you connect in port ${port}`);
});
