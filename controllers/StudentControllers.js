const { error } = require('console')
const StudentModel = require('../model/StudentModel')
 
 const CreateStudent = async (req,res) =>{
    try {
        const createRegister = StudentModel(req.body)
        const SaveRegist = await createRegister.save()
        if(SaveRegist){
            res.send(SaveRegist)
        }
    } catch (error) {
        console.log(error)
    }
 }

 /// ReadAll
const ReadingDAta  = async (req,res)=>{
    const getData = await StudentModel.find().populate("class");
    if(getData){
        res.send(getData)
    }
}

/// dalete Data 
const DeleteClass = async (req,res)=>{
    const removeData = await StudentModel.deleteOne({_id: req.params.id})
    if(removeData){
        res.send("success delete Data ")
    }
}

// update Data
const UpdateClasses =  async (req,res)=>{
    const putData = await StudentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(putData){
        res.send("✅ update success")
    }
}

// ReadSingleData
const ReadSingleData = async(req,res)=>{
    const ReadSingleDeta = await StudentModel.findOne({_id: req.params.id})
    if(ReadSingleDeta){
        res.send(ReadSingleDeta)
    }
}

 module.exports = {CreateStudent,ReadingDAta,DeleteClass,UpdateClasses,ReadSingleData}
 