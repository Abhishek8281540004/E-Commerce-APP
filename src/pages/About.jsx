import React from 'react'
import Layout from '../components/layout/Layout'

function About() {
  return (
    <Layout title={"About Us Ecommerce"}>
         <div className='cm'>
            <div className="l"><img className='ci' src="https://th.bing.com/th/id/OIP.p1o4LbsK9VG0R1sxJmeX-AHaEL?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
            <div className="r"> <div className="CR"><h1 >ABOUT US</h1></div>
               <p style={{"paddingTop":"30px"}}>Any query and info about product feel free to call anytime we are 24x7 available</p>           
              
            </div>
        </div>
    </Layout>
  )
}

export default About
