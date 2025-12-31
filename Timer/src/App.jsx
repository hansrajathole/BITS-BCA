import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {

    let timer 
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };


  }, [isRunning]);

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  return (
    <div>
      <h1>
        {String(hours).padStart(2, 0)} : {String(minutes).padStart(2, 0)} :{" "}
        {String(secs).padStart(2, 0)}
      </h1>
      <div>
        <button className="start"
        onClick={()=>{
          setisRunning((prev)=> !prev)
        }}
        >{isRunning ? "Stop" : "Start"}</button>
       
        <button className="reset"
        onClick={()=>{
          setSeconds(0)
          setisRunning(false)
        }}
        >Reset</button>
      </div>
    </div>
  );
};

export default App;
