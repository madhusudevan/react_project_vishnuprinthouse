import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import OffsetPrinting from './Components/OffsetPrinting/OffsetPrinting';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { MyContext } from './Components/Cards'
import It from './Components/It/It'
import WeddingCard from './Components/Weddingcard/WeddingCard';
import ScreenPrinting from './Components/ScreenPrinting/ScreenPrinting'
import Photostate from './Components/Photostat/Photostat'
import Binding from './Components/Binding/Binding';
import Contact from './Components/Contact/Contact'
function App() {
  
 
 
  return (
    <div className='container-fluid'>
     <Router>
      <Routes>
        <Route exact path = '/' element={<Home />}/>
        <Route exact path = '/it' element={<It/>}/>
        <Route path ="/OffsetPrinting" element={<OffsetPrinting/>}/>
        <Route path ="/wedding" element={<WeddingCard/>}/>
        <Route path ="/screen" element={<ScreenPrinting/>}/>
         <Route path ="/photo" element={<Photostate/>}/>
         <Route path ="/binding" element={<Binding/>}/>
         <Route path ="/contact"element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
