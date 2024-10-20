import { useState } from 'react';
import './App.css';
import TravelForm from './components/TravelForm';
import img from './images/almare.jpg';
import img2 from './images/marriottlogo2.png';
import LogIn from './components/LogIn';

const App = () => {

  const [showForm, setShowForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleClick = () => {
    setShowForm(true);
    
  }

  const handleLogin = () => {
    // Handle successful login logic here (optional)
    setShowForm(true);
    setShowLoginForm(false);
  };


  return (
  <div className="image-container">
    <h1>  </h1>
    <h1> Marriott </h1>
  <h1 className="main-title"> Marriott Destination Calculator</h1>
  
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

    
    <div class className='question-display' style={{ display: showLoginForm ? 'block':'none' }}>
    <h5>
          Ready to start your course with our Destination Calculator?<br /> Sign Up to get started!
        </h5>
      
      <LogIn onLogin={handleLogin}></LogIn>

      


    </div>

    {/* {showForm && (

      <div className='question-display' style={{ display: showForm ?  'none' : 'block' }}>
            
        <h5>
          Ready to start your course with our Destination Calculator? <br /> Simply click the button below to get started!
        </h5>

        <div className='buttons-container'>
          <button className="travel-buttons" onClick={handleClick} >
            Get Started
          </button>
        </div>
      </div>
      
    )

    } */}
    {/* <div className='question-display' style={{ display: showForm ? 'none' : 'block' }}>
      
    
      <h5>
        Ready to start your course with our Destination Calculator? <br /> Simply click the button below to get started!
      </h5>
      <div className='buttons-container'>
        <button className="travel-buttons" onClick={handleClick} >
          Get Started
        </button>
      </div>
    </div> */}

    {showForm && <TravelForm />}
    
    
  </div>  
  )
}

export default App;