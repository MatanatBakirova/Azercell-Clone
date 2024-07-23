import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import CarouselSection from './Components/Section-Cards/CarouselSection';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import FirstPremiumpage from './Components/FirstPremiumpage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';


function App() {
  return (
    <>
{/* <CarouselSection/> */}
<BrowserRouter>
<Navbar/>
 <Section/> 
<Routes>
  <Route path='/' element={<CarouselSection/>}/>
  <Route path='premium' element={<FirstPremiumpage/>}/>
  <Route path='muxtelifkanal' element={<SecondPage/>}/>
  <Route path='supersentarifi' element={<ThirdPage/>}/>

</Routes>
</BrowserRouter>

    </>

  );
}

export default App;
