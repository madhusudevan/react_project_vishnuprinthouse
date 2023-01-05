import React from 'react'
import CollapsibleExample from '../CollapsibleExample'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'
function Contact() {
  

  return (
    <div className='background'>
      
        <CollapsibleExample/>
       
        
        <div className='container-fluid p-0'>
          <h1 className='head' >What We Promise,We Deliver</h1>
        </div>
        <div className='row'id='form'>
          <div className='col-md-6'>
            
          </div>
          <div className='col-md-6 p-5'>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="phone" placeholder="Phonenumber" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Message" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
        
        
          
       
        </div>
       
        <Footer/>
    </div>
  )
}

export default Contact