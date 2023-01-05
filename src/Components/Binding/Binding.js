import React, { Component } from 'react'
import CollapsibleExample from '../CollapsibleExample'
import Footer from '../Footer/Footer'
import './Binding.css'
export class Binding extends Component {
  render() {
    return (
      <div>
        <CollapsibleExample/>
        <div className='row' id='bind'>
          dd
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Binding