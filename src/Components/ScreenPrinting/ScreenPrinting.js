import React from 'react'
import CollapsibleExample from '../CollapsibleExample'
import Footer from '../Footer/Footer'
import './ScreenPrinting.css'
function ScreenPrinting() {
  return (
    <div className='container-fluid'>
      <CollapsibleExample/>
      <div className='row'>
      <div className='col-md-8 p-4' >
      <img src={require('../../Images/screen2.webp')}/>
      </div>
     <div className='col-md-4 p-4'>
      <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of </p>
     </div>
      </div>
      <div className='container'>
        <img className='idcard' src={require('../../Images/idcard.jpg')}/>
      </div>
      
      
      <Footer/>
    </div>
  )
}

export default ScreenPrinting