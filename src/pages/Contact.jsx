import React from 'react'
import Layout from '../components/layout/Layout'
import {BiSupport} from 'react-icons/bi'
import {GoMail} from 'react-icons/go'

function Contact() {
  return (
    <Layout title={"Contact Us"}>
        <div className='cm'>
            <div className="l"><img className='ci' src="https://th.bing.com/th/id/OIP.reZPzTX3fMx9zoqbrcdEXAHaD4?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
            <div className="r"> <div className="CR"><h1 >CONTACT US</h1></div>
               <p style={{"paddingTop":"30px"}}>Any query and info about product feel free to call anytime we are 24x7 available</p>           
               <p><GoMail/> www.help@ecommerceapp.com</p>
               <p><BiSupport/> 129-3744-2873</p>
            </div>
        </div>
    </Layout>
  )
}

export default Contact
