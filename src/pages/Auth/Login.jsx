import React, { useState } from 'react'
import Layout from './../../components/layout/Layout'
import {toast} from 'react-toastify'
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

function Login() {
    
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [auth, setAuth] = useAuth()
 
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
          if(res && res.data.success){
           toast.success(res.data && res.data.message)
           setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(location.state || '/')
          }else{
            toast.error(res.data.message)
            
          }
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong')
          
        }
      }
      
  return (
    <Layout title={"Register ecommerce app"}>
 <div className="register">
    <h1 className="h">Login</h1>
 <form onSubmit={handleSubmit}> 
  
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
  </div>
 
  <div className='mb-3'>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/forgot-password')}>Forgot password</button>
    </div> 

  <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
   </Layout>
  )
}

export default Login
