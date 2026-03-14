const { error } = require('console')
const TeacherSchema = require('../model/TeacherModel')
 
 const CreateTeacher = async (req,res) =>{
    try {
        const createRegister = TeacherSchema({
            ...req.body,
            image: req.body.image || ''
        })
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
    const getData = await TeacherSchema.find().populate("class", "className");
    if(getData){
        res.send(getData)
    }
}

/// dalete Data 
const DeleteClass = async (req,res)=>{
    const removeData = await TeacherSchema.deleteOne({_id: req.params.id})
    if(removeData){
        res.send("success delete Data ")
    }
}

// update Data
const UpdateClasses =  async (req,res)=>{
    const putData = await TeacherSchema.updateOne(
        {_id: req.params.id},
        {$set: {
            ...req.body,
            image: req.body.image || ''
        }}
    )
    if(putData){
        res.send("✅ update success")
    }
}

// ReadSingleData
const ReadSingleData = async(req,res)=>{
    const ReadSingleDeta = await TeacherSchema.findOne({_id: req.params.id})
    if(ReadSingleDeta){
        res.send(ReadSingleDeta)
    }
}

 module.exports = {CreateTeacher,ReadingDAta,DeleteClass,UpdateClasses,ReadSingleData}
 