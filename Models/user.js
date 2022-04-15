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
    Type:String,
  },
  date:{
    Type:Date,
    default: Date.now(),
  },
  userId:{
    Type:Number
  }
});

module.exports = mongoose.model("user", userSchema);
