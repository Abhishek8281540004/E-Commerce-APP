import React, { useState } from 'react'
import Layout from './../../components/layout/Layout'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [phone, setPhone]= useState("")
    const [address, setAddress]= useState("")
    const [answer, setAnswer]= useState("")
    const navigate = useNavigate()

    //form function
    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer})
        if(res.data.success){
          toast.success(res.data.message)
          navigate('/login')
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
    <h1 className="h">Register</h1>
 <form onSubmit={handleSubmit}> 
  <div class="mb-3">
  
    <input placeholder='Name' type="text" class="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)}  required/>
  </div>
  <div class="mb-3">
    
    <input placeholder='Email' type="email" class="form-control" id="exampleInputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
  </div>
  <div class="mb-3">
    
    <input placeholder='Password' type="password" class="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
  </div>
  <div className="mb-3">
   
    <input placeholder='Phone' type="number" className="form-control" id="exampleInputPhone" value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
  </div>
  <div className="mb-3">
    
    <input placeholder='Address' type="text" className="form-control" id="exampleInputaddress" value={address}  onChange={(e) => setAddress(e.target.value)}  required/>
  </div>
  <div className="mb-3">
    
    <input placeholder='What is your favourite sports' type="text" className="form-control" id="exampleInputaddress" value={answer}  onChange={(e) => setAnswer(e.target.value)}  required/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
   </Layout>
  )
}

export default Register
