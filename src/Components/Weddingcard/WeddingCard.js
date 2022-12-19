import React from 'react'
import CollapsibleExample from '../CollapsibleExample'
import Footer from '../Footer/Footer'
import './WeddingCard.css'
import Cards from '../Cards'
import wed1 from '../../Images/wedding card1.webp'
import wed2 from '../../Images/wedding3.jpg'
import wed3 from '../../Images/wedding4.webp'
function WeddingCard(props) {
  return (
    <div className='container-fluid'>
      <CollapsibleExample/>
      
        <img src={require('../../Images/wedding2.jpeg')}/>
        <div className='sample' >
          <h1>Sample Cards</h1>
        </div>
        
        <div className='p-5'>
      <div className='row'>
    <div className='col-md-4'>
      <Cards image={wed1} />
    </div>
     <div className='col-md-4'>
      <Cards image={wed2}/>
    </div>
    <div className='col-md-4'>
      <Cards image={wed3}/>
    </div>
     </div>
      </div>

      <div className='p-5'>
      <div className='row'>
    <div className='col-md-4'>
      <Cards image={wed1} />
    </div>
     <div className='col-md-4'>
      <Cards image={wed2}/>
    </div>
    <div className='col-md-4'>
      <Cards image={wed3}/>
    </div>
     </div>
      </div>


      <div className='p-5'>
      <div className='row'>
    <div className='col-md-4'>
      <Cards image={wed1} />
    </div>
     <div className='col-md-4'>
      <Cards image={wed2}/>
    </div>
    <div className='col-md-4'>
      <Cards image={wed3}/>
    </div>
     </div>
      </div>
      
     
      <Footer/>
    </div>
  )
}

export default WeddingCard