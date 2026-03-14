const { error } = require('console')
const FinanceModel = require('../model/FinanceModel')

const CreateFinance = async (req, res) => {
    try {
        const createRegister = FinanceModel(req.body)
        const SaveRegist = await createRegister.save()
        if(SaveRegist){
            res.send(SaveRegist)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

/// ReadAll
const ReadingData = async (req, res) => {
    try {
        const getData = await FinanceModel.find().populate("class", "className");
        if(getData){
            res.send(getData)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

/// delete Data 
const DeleteFinance = async (req, res) => {
    try {
        const removeData = await FinanceModel.deleteOne({_id: req.params.id})
        if(removeData){
            res.send("success delete Data ")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// update Data
const UpdateFinance = async (req, res) => {
    try {
        const putData = await FinanceModel.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        if(putData){
            res.send("✅ update success")
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

// ReadSingleData
const ReadSingleData = async(req, res) => {
    try {
        const ReadSingleData = await FinanceModel.findOne({_id: req.params.id}).populate("class", "className")
        if(ReadSingleData){
            res.send(ReadSingleData)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {CreateFinance, ReadingData, DeleteFinance, UpdateFinance, ReadSingleData} 