import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  return (
  <div className="image-container">
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
    
  </div>  
  )
}

export default App;