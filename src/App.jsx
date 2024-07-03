import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import CarouselSection from './Components/Section-Cards/CarouselSection';

function App() {
  return (
    <>
    <Navbar/>
<Section/>
<div className='caruselSection'>
<CarouselSection/>

</div>
    </>

  );
}

export default App;
