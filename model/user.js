const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/userSchema');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    jobTitle:String,
    gender:String
})

module.exports = mongoose.model('user',userSchema);