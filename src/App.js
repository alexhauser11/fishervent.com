import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/home';
import OceanBack from './pages/oceanback';
import Performances from './pages/performances';
import Store from './pages/store';
import VentHaven2023 from './pages/venthaven2023';
import Videos from './pages/videos';
import ScrollToHash from './components/scrolltohash';



function App(){
  return(
    <BrowserRouter>
    <ScrollToHash/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/oceanback' element={<OceanBack/>}/>
      <Route path='/performances' element={<Performances/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/venthaven2023' element={<VentHaven2023/>}/>
      <Route path='/videos' element={<Videos/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;