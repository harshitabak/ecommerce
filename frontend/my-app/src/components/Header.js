import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {AiFillShopping} from "react-icons/ai"
import { useAuth } from './context/Auth'
const Header = () => {
  const [auth,setAuth] = useAuth()
  const handlelogout =() =>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand" ><AiFillShopping/>E-Commerce</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" >Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to ="/category"className="nav-link" >Category</NavLink>
      </li>
      {
        !auth.user  ? (<> <li className="nav-item">
        <NavLink  to ="/register"className="nav-link" >Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to ="/login"className="nav-link" >Login</NavLink>
      </li>
        </>) 
        : (<><li className="nav-item">
        <NavLink  onClick={handlelogout} to ="/logout"className="nav-link" >Logout</NavLink>
      </li>

        </>)
      }
      
      <li className="nav-item">
        <NavLink  to ="/cart"className="nav-link" >Cart(0)</NavLink>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Header
