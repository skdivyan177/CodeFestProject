import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';
import img from './images/almare.jpg'

const App = () => {

  return (
  <div className="image-container">

  {/* <h1 class="main-title">Marriott</h1> */}
  <h1 style={{ color: '#B41F3A' }} className="main-title">
    <t>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marriott</t> <br />
    Destination Calculator
</h1>

    <img
        src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2023/11/marriott-logo.png?resize=1536%2C1007&ssl=1"
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