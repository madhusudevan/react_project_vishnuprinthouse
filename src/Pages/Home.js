import React from 'react'
import CollapsibleExample from '../Components/CollapsibleExample'
import Slider from '../Components/Slider'
import Section from '../Components/Section/Section'
import Picture from '../Components/Picture/Picture'
import Products from '../Components/Product/Products'
import Contents from '../Components/Contents/Contents'
import View from '../Components/View/View'
import Footer from '../Components/Footer/Footer'
import OffsetPrinting from '../Components/OffsetPrinting/OffsetPrinting'

function Home(props) {
  console.log("hOme",props)
  return (
    <div>
        <CollapsibleExample/>

     <Slider/> 
      <Section/>
     <Picture/>
     <Products />
      <Contents/>
     <View/>
     <Footer/> 
     
     
    </div>
  )
}

export default Home