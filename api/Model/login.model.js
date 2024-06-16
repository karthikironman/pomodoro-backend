const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Login",loginSchema);