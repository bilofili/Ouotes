import { useEffect, useState } from 'react';
import video from './Skyscrapers.mp4'; 
import './App.css';

function App() {

  const [displayApi, setDisplayApi] = useState("");
  
      async function fetchData() {
      const response = await fetch("http://www.boredapi.com/api/activity/");
      const data = await response.json();
      setDisplayApi(data.activity);  
  } 

  useEffect(() => {
    setInterval(fetchData(), 15000);   
  }, []); 

  return (
    <div className='App'>

      <video autoPlay loop muted playsInline preload='yes'>
          <source src={video} type="video/mp4" />  
      </video>

      <div className="content">
          <h2>{displayApi}</h2>
          <button onClick={fetchData}>Change qoute</button>
      </div>

      <div className='footer'>
        <p>created by Bilobrov Filip 2023 all rights reserved</p>
      </div>

    </div>
  );
}

export default App;
