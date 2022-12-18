import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
export class Slider extends Component {
  render() {
    return (
        <Carousel className="curasol">
        <Carousel.Item interval={500}>
          <img 
            className="d-block w-100"
            src={require('../Images/printpic1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img 
            className="d-block w-100 "
            src={require('../Images/printpic2.webp')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../Images/printpic3.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Slider