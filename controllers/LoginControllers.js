const { error } = require('console')
const LogingSchema = require('../model/LoginModel')

// create Register 
 const createRegister = async (req,res) =>{
    try {
        const createRegister = LogingSchema(req.body)
        const SaveRegist = await createRegister.save()
        if(SaveRegist){
            res.send(SaveRegist)
        }
    } catch (error) {
        console.log(error)
    }
 }


 /// create Register 

 const createLoging = async (req,res)=>{
     try {
        if(req.body.Email && req.body.password){
           const  M_Loging = await LogingSchema.findOne({
               Email: req.body.Email,
               password: req.body.password
           })
           if(M_Loging){
            res.send(M_Loging)
           }
           else{
            res.send({
                error : "User not Found "
            })
           }
        }
        else{
            res.send({
                error:"Email and password Is required "
            })
        }
        
     } catch (error) {
        console.log(error)
        res.status(500).send({
            error: "Internal server error"
        })
     }
 }




module.exports = {createRegister,createLoging}