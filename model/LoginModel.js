const mongoose = require("mongoose")
const { type } = require("os")

const LogingSchema = mongoose.Schema({
    Name:{
        type : String,
        require:true
    },
    Adress:{
        type : String ,
        require : true 
    },
    Email:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    role:{
        type:String,
        enum:['admin','teacher','student'],
        reuired: true
    }
})
module.exports = mongoose.model("Login",LogingSchema)