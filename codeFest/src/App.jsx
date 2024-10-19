import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';


const App = () => {

  return (
  <div className="image-container">
    <img
        src="https://brandslogos.com/wp-content/uploads/images/large/marriott-logo.png"
        alt="alt"
        className="small-image" 
      />
      
    <img
      src="https://cache.marriott.com/is/image/marriotts7prod/fllsb-view-0077:Pano-Hor?wid=1600&fit=constrain"
      alt="alt"
      className="responsive-image"
    />
    <TravelForm></TravelForm>
  </div>  
  )
}

export default App;