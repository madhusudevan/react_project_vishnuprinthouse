import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'font-awesome/css/font-awesome.min.css';

 // import FontAwesome from 'react-fontawesome'


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
            <Link to = '/contact' className='link'>Contact us</Link>
            
            <h1>Services</h1>
            <br/>
          <Link to = '/offsetprinting'className='link'>Offset Printing</Link>
          <Link to = '/screenprinting' className='link'>Screen Printing</Link>
          <Link to = '/graphicdesigning' className='link'>Graphic Designing</Link>
          <Link to = '/dtp' className='link'>DTP</Link>
          <Link to = '/idcard' className='link'>ID Card Printing</Link>
          <Link to = '/binding' className='link'>Book Binding</Link>
          <Link to = '/spiralbinding' className='link'>Spiral Binding</Link>
          <Link to = '/photocopy' className='link'>Photocopy</Link>
          <Link to = '/officestationary' className='link'>Office Stationary</Link>
          
         
          </div>




          <div className='col-md-4'>
            
           

          
          </div>
                </div>
            
          
        </div>   
    )
  }
}

export default Footer