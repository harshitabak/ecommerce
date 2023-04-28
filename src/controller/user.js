
const  userModel = require("../Modals/userModal")
const jwt = require("jsonwebtoken")

const createUser = async (req,res)=>{
    try{
        let data = req.body
        let {name, email , password, address }= data
        if(Object.keys(data).length==0)
         return res.status(400).send({status:false , msg:"body is empty"})
         if(!name )
         return res.status(400).send({status:false , msg:"name is required"})
         if(!email)
         return res.status(400).send({status:false , msg:"plz email is required"})
         if(!password)
         return res.status(400).send({status :false , msg :"password is required"})
         if(!address )
         return res.status(400).send({status:false , msg:"plz address is required"})
         let createData = await userModel.create(data)
           res.status(201).send({status :true ,data: createData , msg:"user create successfully"})
    }
    catch(err){
        res.status(500).send({status:false , message :err.msg})
    }
}


const userLogin = async (req,res)=>{
    try{
        let val = req.body
        let {email ,password} = val
        if(!email)
        return res.status(400).send({status:false, mag:"email is mandatory"})
        if(!password)
        return res.status(400).send({status:false, msg:"password is mandatory"})
        let user = await userModel.findOne({email:email, password:password})
        if(!user)
        return res.status(400).send({status:false, msg:"invalid user details"})
        let token = jwt.sign(
            {
            userId : user._id
            }, "mechodal"
        )
          return res.status(201).send({status:true , token:token,message :"your login successfully"})
    }
    catch(err){
res.status(500).send({status:false,message: err.msg})
    }

}
   
module.exports ={createUser,userLogin}