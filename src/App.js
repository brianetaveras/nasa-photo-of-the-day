import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import Info from './components/Info.js'
import Clock from './components/Clock.js'



function App() {
  const [data, setData] = useState({})
    useEffect(()=>{
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=iP7upStusI09dISpB9ZTwPQcWurF87h3tIC68XSB').then(res=>{
        setData(res.data)
        let App = document.querySelector('.App')
        App.style.background = `url('${res.data.url}')`
        console.log(res.data)
      })
   
    }, [])


  return (
    <div className="App">
      <Info info={data} />
      <Clock date={data.date} />
    </div>
  );
}

export default App;
