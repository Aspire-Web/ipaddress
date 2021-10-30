
import './App.css';
import React,{useEffect,useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';
import Detail from './detail'




function App() {

  const url1 = 'https://api.ipify.org?format=json/'  //2.243.59.5  


  const [ip, setIp] = useState()
   // accepts a callback function and a dependencies array
  useEffect(() => loadIP(), [])
  
  const loadIP = async () => { // async/await 
    console.log('I am here')
    const response1 = await axios.get(url1) // this is a  synchronous operation
   // const data = await response1.json()
   console.log(response1)
   // console.log(data)

   await setIp(response1.data) // here we update the state
    
  }
    

  return (

    <div className="App">
        
      <div className="ip">Your IP Address is: {ip} </div>
      
      {/*WaitForIT()*/}
      {ip ? <Detail ip={ip} /> : 'Loading'}
      
    </div>
  );
}

export default App;
