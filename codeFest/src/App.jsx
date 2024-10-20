import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';
import img from './images/almare.jpg';
import img2 from './images/marriottlogo2.png';

const App = () => {

  return (
  <div className="image-container">
    <h1>  </h1>
    <h1>  </h1>
  <h1 class="main-title"> Marriott <br /> Destination Calculator</h1>
  {/* <h1> Text </h1> */}

  

    <img
        src={img2}
        alt="alt"
        className="small-image" 
      />
      
    <img
      src={img}
      alt="alt"
      className="responsive-image"
    />

    
    <TravelForm></TravelForm>
  </div>  
  )
}

export default App;