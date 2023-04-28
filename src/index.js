
const express = require("express")
const  mongoose = require("mongoose")
const Route = require("./Routes/route")
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://harshita1:HV8WXEqwmkGdfP0o@harshita.c31chtf.mongodb.net/mechodalassignment?retryWrites=true&w=majority"
,
{
    useNewUrlParser:true
})
.then(()=> console.log("mondodb is connected"))
.catch((err)=> console.log(err))



app.listen(3000,()=>{

   console.log("express is running on port " + (3000)) 
})
app.use("/", Route)