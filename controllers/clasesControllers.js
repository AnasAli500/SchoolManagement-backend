const { error } = require('console')
const ClassSchema = require('../model/clasesModel')
const clasesModel = require('../model/clasesModel')
 
 const CreateClasses = async (req,res) =>{
    try {
        const createRegister = ClassSchema(req.body)
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
    const getData = await ClassSchema.find()
    if(getData){
        res.send(getData)
    }
}

/// dalete Data 
const DeleteClass = async (req,res)=>{
    const removeData = await ClassSchema.deleteOne({_id: req.params.id})
    if(removeData){
        res.send("success delete Data ")
    }
}

// update Data
const UpdateClasses =  async (req,res)=>{
    const putData = await ClassSchema.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(putData){
        res.send("✅ update success")
    }
}

// ReadSingleData
const ReadSingleData = async(req,res)=>{
    const ReadSingleDeta = await clasesModel.findOne({_id: req.params.id})
    if(ReadSingleDeta){
        res.send(ReadSingleDeta)
    }
}

// Toggle isActive status
const ToggleActiveStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        const updated = await ClassSchema.updateOne(
            { _id: id },
            { $set: { isActive } }
        );
        if (updated) {
            res.send("✅ Status Updated Successfully");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating status");
    }
};

module.exports = {CreateClasses,ReadingDAta,DeleteClass,UpdateClasses,ReadSingleData,ToggleActiveStatus}
 