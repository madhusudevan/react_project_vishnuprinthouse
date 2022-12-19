import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export class Footer extends Component {
  render() {
    return (
        <div className='container-fluid'id='footer'>
            <div className='row'>
                
                <div className='col-md-4'id='colum1'>
                    <div className='vertical'>
                   
                    </div>
                    <h4>Vishnu Print House</h4>
                    <br/>
                    
                    <p>
                    logoThomson Press is among the<br/> largest commercial printer and<br/> allied services company in the<br/> Indian sub-continent.

                    </p>
                    <div>
                        <h5>Adress</h5>
                        <br/>
                        <b>Vishnu Print House</b>
                        <br/>
                        <p>7/466 opposite petrol pump<br/>
                        Koyyamarakkad,Kanjikode<br/>
                        PO.Palakkad
                        </p>
                    </div>
          </div>







          <div className='col-md-4'id='colum2'>
            <div className ='vertical-1'>

            </div>
            <h1>Company</h1>
            <br/>
            <h6>About us</h6>
            <br/>
            <h6>Contact us</h6>
            
            <h1>Services</h1>
            <br/>
            <Link to = '/offsetprinting'>Offset Printing</Link>
          <Link to = '/screenprinting'>Screen Printing</Link>
          <Link to = '/offsetprinting'>Graphic Designing</Link>
          <Link to = '/offsetprinting'>DTP</Link>
          <Link to = '/offsetprinting'>ID Card Printing</Link>
          <Link to = '/offsetprinting'>Book Binding</Link>
          <Link to = '/offsetprinting'>Spiral Binding</Link>
          <Link to = '/offsetprinting'>Photocopy</Link>
          <Link to = '/offsetprinting'>Office Stationary</Link>
          
           
          </div>




          <div className='col-md-4'>
            
            
          </div>
                </div>
            
          
        </div>   
    )
  }
}

export default Footer