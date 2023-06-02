import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../components/context/Auth'

const Home = () => {
  const [auth,setAuth] = useAuth()  
  return (
    <Layout title= "Best offer">
    <h1> home</h1>
    <pre> {JSON.stringify(auth,null,4 )}</pre>
    </Layout>
  )
}

export default Home
