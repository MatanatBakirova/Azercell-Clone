import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Carousell from './Components/Section-Cards/Carousell';

function App() {
  return (
    <>
    <Navbar/>
<Section/>
{/* <Carousell/> */}
    </>

  );
}

export default App;
