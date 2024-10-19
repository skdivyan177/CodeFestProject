import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';


const App = () => {

  return (
  <div className="image-container">
    <h1> Destination Calculator </h1>
    
    <img
        src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2023/11/marriott-logo.png?resize=1536%2C1007&ssl=1"
        alt="alt"
        className="small-image" 
      /> */
      
    <img
      src="https://cache.marriott.com/is/image/marriotts7prod/fllsb-view-0077:Pano-Hor?wid=1600&fit=constrain"
      alt="alt"
      className="responsive-image"
    />
    <TravelForm></TravelForm>

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