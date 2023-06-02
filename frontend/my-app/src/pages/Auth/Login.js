import React,{useState} from 'react'
import Layout from '../../components/Layout'
import {toast} from "react-hot-toast"
import axios from "axios"
import "../../styles/AuthStyles.css";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/context/Auth';
const Login = () => {
   
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [auth,setAuth] = useAuth()   
    const navigate = useNavigate()

    const handlesubmit = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.post("/api/v1/auth/login" ,{
         
         email,
         password,
         
      })
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/")
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
      <h1 >Login</h1>
      <form onSubmit={handlesubmit}>
  <div className="mb-3">
    
    <input type="email" className="form-control" value={email}id="exampleInputEmail1" placeholder=' Enter your Email'onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control"value={password} id="exampleInputPassword1" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </Layout>
  )
}

export default Login