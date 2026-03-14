const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    StudentId:{
        type : Number,
        required:true,
    },
    FullName:{
        type : String,
        required:true
    },
    Age: {
        type: String,
        required: true
    },
    adress:{
        type : String ,
        required:true
    },
    phone:{
        type : Number ,
        required:true
    },
    Prent:{
        type : String ,
        require:true
    },
    Pr_PHONE:{
        type:Number,
        required:true
    },
    Gender:{
        type: String,
        enum: ['male','female'],
        reuired : true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    }
})
module.exports = mongoose.model("Student",StudentSchema)