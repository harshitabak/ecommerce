import React,{useState} from 'react'
import "../../styles/AuthStyles.css";
import Layout from '../../components/Layout'
import {toast} from "react-hot-toast"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddres]=useState("")
    const navigate = useNavigate()

    const handlesubmit = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.post("/api/v1/auth/register" ,{
         name,
         email,
         password,
         phone,
         address
      })
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        navigate("/login")
      }else{
        toast.error(res.data.message)
      }

    }catch(err){
        console.log(err)
        toast.error("somthing went wrong")
    }
  }
  return (
    <Layout title="Register - E Commerce">
    <div className='form-container'>
      <h1 >Register </h1>
      <form onSubmit={handlesubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" value={name} id="exampleInputEmail1"placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="mb-3">
    
    <input type="email" className="form-control" value={email}id="exampleInputEmail1" placeholder=' Enter your Email'onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control"value={password} id="exampleInputPassword1" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3">
   
    <input type="phone" className="form-control"value={phone} id="exampleInputEmail1"  placeholder='Enter Your Phone' onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div className="mb-3">
   
    <input type="addres" className="form-control"value={address} id="exampleInputEmail1"placeholder='Enter Your Addres' onChange={(e)=>setAddres(e.target.value)}/>
    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </Layout>
  )
}

export default Register
