const mongoose = require("mongoose");
const {Schema} = mongoose;

const userTypeSchema = new Schema({
  usertype:{
    type:String,
    required:true
  },
  isActive:{
    type: Boolean
  }
});