
 const productModel =require("../Modals/productModal")

const createProduct = async (req,res)=>{
    try{
        let data = req.body
        let {name, description , price, imageUrl }= data
        if(Object.keys(data).length==0)
         return res.status(400).send({status:false , msg:"body is empty"})
         if(!name )
         return res.status(400).send({status:false , msg:"name is required"})
         if(!description)
         return res.status(400).send({status:false , msg:"plz description is required"})
         if(!price)
         return res.status(400).send({status :false , msg :"price is required"})
         if(!imageUrl )
         return res.status(400).send({status:false , msg:"plz imageUrl is required"})
         let createData = await productModel.create(data)
           res.status(201).send({status :true ,data: createData , msg:"product create successfully"})
    }
    catch(err){
        res.status(500).send({status:false , message :err.msg})
    }
};

module.exports = {createProduct}