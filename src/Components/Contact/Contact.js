import React from 'react'
import CollapsibleExample from '../CollapsibleExample'
import Footer from '../Footer'
function Contact() {
  return (
    <div>
        <CollapsibleExample/>
        <img src = {require('../../Images/contact.jpg')}/>
        <Footer/>
    </div>
  )
}

export default Contact