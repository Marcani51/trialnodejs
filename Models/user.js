const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password:{
    type:String
  },
  token:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  userId:{
    type:Number
  },
  userType:{
    type:Schema.Types.ObjectId,
    ref:"usertype"
  }
});

module.exports = mongoose.model("user", userSchema);
