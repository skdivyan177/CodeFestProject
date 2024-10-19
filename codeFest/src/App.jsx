import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';

const App = () => {

  return (
  <div className="image-container">
    <h1> Destination Calculator </h1>
    
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dxlhJfmDGIMT_m1uv3wXBnoNpOt8SzE9paipVBpcfAz8CIymcnTViGbOt2GVYRn_Sng&usqp=CAU"
        alt="alt"
        className="small-image" 
      />
    <img
      src="https://cache.marriott.com/is/image/marriotts7prod/fllsb-view-0077:Pano-Hor?wid=1600&fit=constrain"
      alt="alt"
      className="responsive-image"
    />
    <button type="button">Home</button>
    <button type="button">About Us</button>
    <button type="button">Contact</button>
    <button type="button">Language 🌐</button>

    {/* <button type="button" onClick={handleClick}>
      Home
    </button>
    <button type="button" onClick={handleClick}>
      About Us 
    </button>
    <button type="button" onClick={handleClick}>
      Contact
    </button>
    <button type="button" onClick={handleClick}>
      Language 🌐
    </button> */}
  </div>  
  )
}

export default App;