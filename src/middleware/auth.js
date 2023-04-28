const jwt = require("jsonwebtoken")
const userModal = require("../Modals/userModal")
const { default: mongoose } = require("mongoose")

const authenticate = async (req,res,next)=>{
    try{
        let token = req.headers["x-api-key"]
        if(!token)
        return res.status(401).send({status:false ,msg :"plz provide token "})
        jwt.verify(token ,"mechodal" ,(err,decode)=>{
            if(err){
                return res.status(401).send({status:false,message:"invalid token"})
            }
            req.token = decode
            next()
        })

    }
    catch(err){
         return res.status(500).send({status:false, message:err.msg})
    }

}


const authorization = async (req,res,next)=>{

    try{
        let token = req.headers["x-api-key"]
        let decodedToken = jwt.verify(token, "mechodal")
        let userLogin = decodedToken.userId
        let userId = req.body.userId
        if(userId){
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return res.status(400).send({status:false,message:"userId is invalid"})
            }
            let userdata = await userModal.findById(userId)
            if(!userdata){
                return res.status(404).send({status:false,msg :"No such user Available"})
            }
             if(userId !==userLogin){
                return res.status(403).send({status:false,message:"You are not authoriesd"})
             }
        }
        next()

    }
    catch(err){

    }
}

module.exports = {authenticate, authorization}