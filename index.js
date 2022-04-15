require("dotenv").config();
const express = require("express");
const app = express();
const port = 4200;
const cors = require("cors");

const userRoute=require('./Routes/userRoute');
const User = require("./Models/user");

///connect ke db
const connectDb = require("./config/db");
connectDb();

app.use(cors());
app.use(express.json());

app.use('/api/user',userRoute);
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/user", async (req,res)=>{
//     try {
//         const user = await User.find({});
//        // let userName;
//       //  userName= user.name;
//         console.log(user);
//         res.json(user);        
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error");
//     }
// });

// app.post("/api/new/user", async (req, res) => {
//   try {
//     const user = new User({
//       userName: req.body.userName,
//       email: req.body.email,
//       password: req.body.password,
//       token:req.body.token,
//       date:req.body.date,
//       userId:req.body.userId
//     })

//     await user.save();
//     res.json(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// })



app.listen(port, () => {
  console.log(`hello you connect in port ${port}`);
});
