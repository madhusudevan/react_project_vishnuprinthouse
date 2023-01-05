import React from 'react'
import './Web.css'
import { useNavigate,Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Web() {
    const navigate = useNavigate()
    const clickNow = ()=>{
        navigate('/it')
    }

  return (
    <div className='container-fluid p-5'>
        <div className='row'>
            <div className='col-md-6'>
            <Link to ='/it'>
        <img className='java'src={require('../../Images/dev2.jfif')}/>
 </Link>

            </div>
            <div className='col-md-6' >

 <h1 >Web Development</h1>
        <p>
            <span className="para1">
            We are Chicago’s premier custom printing and promo product company for over 50 years. Our consistency in delivering quality prints has established long-term relationships with our clients. We are committed to providing high-quality custom printing services in Chicago. Quality print and timely delivery is our motto. ABC Printing Company offers modern print services in Chicago at affordable prices.
            <Button  onClick={()=>{
            clickNow()
        }}>view more</Button>

            </span>
        </p>
        {/* <p>
            <span className='para2'>
            Whether you are implementing an employee incentive program, designing a direct marketing campaign or generating buzz for an upcoming event, ABC uses creativity and innovation to connect you with your audience. Every project is an opportunity to explore, with our clients, the unlimited possibilities and potential this collaboration brings. Allow us to make a measurable difference for your marketing communications
            </span>
        </p> */}

            </div>
        </div>
       
        
        
        
       
        
    </div>
  )
}

export default Web