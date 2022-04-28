const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
    type:String,
    maxLength:50
  },
  email:{
    type: String,
    trim: true,
    unique: 1
  },
  password:{
    type:String,
    maxLength: 10
  },
  lastname:{
    type:String,
    maxLength:50
  },
  role:{
    type:Number,
    default:0
  },
  image:String,
  token:{
    type:String
  },
  tokenExp:{
    type:Number
  }

});

const Users = mongoose.model('Users', userSchema);

module.exports = {Users};