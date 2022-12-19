import React, { Component } from 'react'
import './Section.css'
export class Section extends Component {
  render() {
    return (
      <div className='container-fluid p-5' id="custom">
        <h1>Premier One-stop Custom Print and Promo Shop in Chicago</h1>
       
     <p>
        <span className='abc'>
        ABC Printing Co, a solutions-driven graphic communications company with a history of success connecting brands with consumers. While some companies simply provide products, ABC provides integrated solutions that deliver your message, change perceptions and drive sales. Think of us as your full-service creative agency without the agency fees.
        </span>
     </p>
     <p>
        <span className='cba'>
        From large format digital to direct mailers to custom packaging and promotional  products, our print, promo, and packaging experts are ready to turn your project into a thing of beauty.

        </span>
     </p>
      </div>

    )
  }
}

export default Section