const mongoose = require("mongoose")
const { type } = require("os")

const TeacherSchema = mongoose.Schema({
    TeacherId:{
        type : Number,
        require:true
    },
    FullName:{
        type : String,
        require:true
    },
    adress:{
        type : String ,
        require:true
    },
    phone:{
        type : Number ,
        require:true
    },
    Period:{
        type : String ,
        require:true
    },
    Gender:{
        type: String,
        enum: ['male','female'],
        reuire : true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    image: {
        type: String,
        default: ''
    }
})
module.exports = mongoose.model("Teacher",TeacherSchema)