import React from 'react'
import './Picture.css'
function Picture() {
  return (
    <div className='container-fluid p-5'>
       
        <img className='printer' src={require('../../Images/slider-wide-image.jpg')}/>
        <img className='brou' src={require('../../Images/brou.png')}/>
        <h1>Why ABC Printing Company?</h1>
        <p>
            <span className="para1">
            We are Chicago’s premier custom printing and promo product company for over 50 years. Our consistency in delivering quality prints has established long-term relationships with our clients. We are committed to providing high-quality custom printing services in Chicago. Quality print and timely delivery is our motto. ABC Printing Company offers modern print services in Chicago at affordable prices.

            </span>
        </p>
        <p>
            <span className='para2'>
            Whether you are implementing an employee incentive program, designing a direct marketing campaign or generating buzz for an upcoming event, ABC uses creativity and innovation to connect you with your audience. Every project is an opportunity to explore, with our clients, the unlimited possibilities and potential this collaboration brings. Allow us to make a measurable difference for your marketing communications
            </span>
        </p>
        <p>
            <span className='para3'>
            If you're looking for a top-quality custom printer with friendly, skilled professionals, look no further. We'll work with you every step of the way as part of our unwavering commitment to exceed your expectations.
            </span>
        </p>
      

    </div>
  )
}

export default Picture