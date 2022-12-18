import React from 'react'
import { Card  ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MyContext from 'react'
import { useLocation } from "react-router-dom"
import { useState } from 'react'
import App from '../App'
import Home from '../Pages/Home'
import './Cards.css'

function Cards(props) {
   //console.log(props,'---props')
  const navigate = useNavigate();
   

 
   
    const navigateOffsetPrinting = () => {
      // 👇️ navigate to /contacts
      navigate(`/${props.offset}`);
      console.log(props,'---Offfunctionca;;')
    };

  
    const navigateWedding = () => {
      // 👇️ navigate to /contacts
      navigate(`/${props.wedding}`);
      console.log(props,'---weddfunctionca;;')
    };
  
    const navigateToScreen = () => {
      // 👇️ navigate to /contacts
      navigate(`/${props.screen}`);
    };
    const navigateToPhoto = () => {
    // 👇️ navigate to /contacts
    navigate(`/${props.photo}`);
  };
 
 
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
 
 // const {offset}=state
 


  return (

    
        
    <div>
      
              <Card className="card ">
        <Card.Img variant="top" className="card-image"src={props.image} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          {/* {console.log(`card texy${props.offset}`)} */}
          </Card.Text>
          {
            
          }
          <Button onClick={props.wedding?navigateWedding : props.offset?navigateOffsetPrinting :props.photo?navigateToPhoto: navigateToScreen }className='details'>For More Details</Button>
          
          
          

        
        </Card.Body>
      </Card>
     
      
              </div>
             
  )
}

export default Cards
export {
  MyContext
}