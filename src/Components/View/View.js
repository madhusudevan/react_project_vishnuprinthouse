import React, { Component } from 'react'
import './View.css'
export class View extends Component {
  render() {
    return (
    <div className='back'>
      <div className='row'>
        <div className='col-md-7 ' >
            
            <h1 className='hot' >Hot Off the Press</h1>
            <div className='date'>
            <span className='date-month' >DECEMBER</span>
            <span className='seperator' > </span>
            <span className='date-day' >13</span>
            <span className='seperator' >,</span>
            <span className='date-year' >2022</span>
            </div>
            <h1 className='para'>How to Tell a Great Story with Your Marketing Efforts</h1>
            <p className='story' >
            Stories are at the heart of all marketing. You could have the best product, <br/>but without storytelling, it may not reach its sales potential.
            </p>

        </div>
        <div className='col-md-5'>
             <div className='happy'>
             <span className='date-month' >DECEMBER</span>
            <span className='seperator' > </span>
            <span className='date-day' >13</span>
            <span className='seperator' >,</span>
            <span className='date-year' >2022</span>
             
            <h2 className='para' >4 Happy Holiday Marketing Tips</h2>
            </div>

            <div className='happy'>
            <span className='date-month' >DECEMBER</span>
            <span className='seperator' > </span>
            <span className='date-day' >13</span>
            <span className='seperator' >,</span>
            <span className='date-year' >2022</span>
            
            <h2 className='para'>Evaluating Your Marketing Plan for 2022</h2>
            </div>


        </div>
      </div>
      </div>
    )
  }
}

export default View