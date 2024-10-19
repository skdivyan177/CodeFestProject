import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';


const App = () => {

  return (
  <div className="image-container">
    <img
        src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2023/11/marriott-logo.png?resize=1536%2C1007&ssl=1"
        alt="alt"
        className="small-image" 
      />

    <img
      src="https://cache.marriott.com/is/image/marriotts7prod/fllsb-view-0077:Pano-Hor?wid=1600&fit=constrain"
      alt="alt"
      className="responsive-image"
    />
    
  </div>  
  )
}

export default App;