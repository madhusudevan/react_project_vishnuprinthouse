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
    console.log(props.style,'---props')
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
  const navigateToBinding = () => {
    // 👇️ navigate to /contacts
    navigate(`/${props.binding}`);
  };
 
 
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
 // const {offset}=state
  return (      
    <div>
      <a href=''>
      
              <Card className="card " style={props.style}  onClick={props.wedding?navigateWedding : props.offset?navigateOffsetPrinting :props.photo?navigateToPhoto:props.binding?navigateToBinding: navigateToScreen }>
        <Card.Img variant="top" className="card-image"src={props.image} />
        <Card.Body>
          <Card.Title className='title'>{props.title}</Card.Title>
        </Card.Body>
      </Card>
      </a>
      
              </div>
             
  )
}

export default Cards
