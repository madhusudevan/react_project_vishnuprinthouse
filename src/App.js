import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import OffsetPrinting from './Components/OffsetPrinting/OffsetPrinting';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { MyContext } from './Components/Cards'
import WeddingCard from './Components/Weddingcard/WeddingCard';
import ScreenPrinting from './Components/ScreenPrinting/ScreenPrinting'
import Photostate from './Components/Photostat/Photostat'

function App() {
  
 
 
  return (
    <div className='container-fluid'>
     <Router>
      <Routes>
        <Route exact path = '/' element={<Home />}/>
        <Route path ="/OffsetPrinting" element={<OffsetPrinting/>}/>
        <Route path ="/wedding" element={<WeddingCard/>}/>
        <Route path ="/screen" element={<ScreenPrinting/>}/>
         <Route path ="/photo" element={<Photostate/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
