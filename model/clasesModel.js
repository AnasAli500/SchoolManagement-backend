const mongoose = require("mongoose")

const Clases = mongoose.Schema({
    classId:{
        type : String,
        require:true
    },
    className:{
        type : String,
        require:true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model("classes",Clases)