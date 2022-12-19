import React from 'react'
import './Products.css'
import Cards from '../Cards'

import OffsetPrinting from '../OffsetPrinting/OffsetPrinting'
import image from '../../Images/offsetmachine.webp'
import image1 from '../../Images/screenprint.jpg'
import image2 from '../../Images/weddingcard.webp'
import image3 from '../../Images/binding.avif'
import image4 from '../../Images/dtp2.jpg'
import image5 from '../../Images/photostat.webp'

 function Products () {
    
    var style={
      

       
       width:'10rem',
       height:'20rem'
    }
   
    
   

    return (
    

<section className='section p-5'>
      <div className='row'>
          <div className='col-md-4 py-4'>
           
 
          <Cards image={image}offset='offsetprinting'title='Offset Printing'/>
 </div>
 <div className='col-md-4 py-4'>
           
 <Cards image={image1} screen='screen'title='Screen Printing' />
 
 </div>
 <div className='col-md-4 py-4'>
          
 <Cards image={image2} wedding="wedding" title='Wedding Cards' />
 
 </div>
 <div className='col-md-4 py-4'>
          
 <Cards image={image3} binding='binding' title='Book Bindings'/>
 
 </div>
 <div className='col-md-4 py-4'>
           
 <Cards image={image4} dtp='dtp'title='DTP Works'/>
 
 </div>
 <div className='col-md-4 py-4'>
           
 <Cards image={image5} photo="photo"title='Photostat' />
 
 </div>
  </div>

  </section>
    
   
    )
  }


export default Products