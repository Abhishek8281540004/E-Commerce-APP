import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function ForgotPassword() {
    const [email, setEmail]= useState("")
    const [newPassword, setNewPassword]= useState("")
    const [answer, setAnswer]= useState("")
   
    const navigate = useNavigate()
   

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer})
          if(res && res.data.success){
           toast.success(res.data && res.data.message)
          
        
            navigate( '/login')
          }else{
            toast.error(res.data.message)
            
          }
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong')
          
        }
      }
  return (
    
    <Layout title={'Forgot password- ecommerce app'}>
         <div className="register">
    <h1 className="h">Reset Password</h1>
 <form onSubmit={handleSubmit}> 
  
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Enter your favorite sport</label>
    <input type="text" class="form-control" id="exampleInputEmail" value={answer} onChange={(e) => setAnswer(e.target.value)}  required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">New Password</label>
    <input type="password" class="form-control" id="exampleInputPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  required/>
  </div>
 
  

  <button type="submit" class="btn btn-primary">Reset</button>
</form>
</div>
    </Layout>
  )
}

export default ForgotPassword
