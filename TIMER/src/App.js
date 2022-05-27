
import './App.css';
import {useEffect,useState,useRef} from "react"

function App() {
  const[counter,setCounter]=useState(0);
  const counterRef=useRef(null);
  console.log(counterRef)
 

  // useEffect(()=>{
  //   counterRef.current=setInterval(()=>{
  //     setCounter((p)=>p+1);
  //   },1000);

  //   return()=>{
  //     clearInterval(counterRef);
  //   }


  // },[])

  // const startInterval=()=>{
  //   counterRef.current=setInterval(()=>{
  //     setCounter((p)=>p+1);
  //   },1000);

  // }
  return (
    <div className="App">
      <h3>STOPWATCH:{counter}</h3>
      <button
      onClick={()=>{
        clearInterval(counterRef.current);

      }} >PAUSE</button>

      <button
      onClick={()=>{
        clearInterval(counterRef.current);
        counterRef.current=setInterval(()=>{
          setCounter((p)=>p+1);
        },1000);
      }}>
        start

      </button>

      <button onClick={()=>{
        clearInterval(0);
        setCounter(0);
      }}>
        reset

      </button>


     
    </div>
  );
}

export default App;
