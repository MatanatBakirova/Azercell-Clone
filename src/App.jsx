import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

function App() {
  return (
    <>
    <Navbar/>
<Section/>
    </>

  );
}

export default App;
