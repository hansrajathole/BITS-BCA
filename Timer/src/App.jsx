import React from 'react'
import { useState, useEffect } from "react";

const App = () => {

  const date = new Date()

  console.log();
  

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds((prev)=>prev+1)
    }, 1000);


    return () => {
      clearInterval(timer)
    }

  }, [])
  

  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds%3600)/60 )
  let secs = seconds % 60


  return (
    <div>
      <h1>
        {hours} : {minutes} : {secs}
      </h1>
    </div>
  )
}

export default App
