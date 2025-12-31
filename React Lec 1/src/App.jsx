import React from 'react'
import { useState } from 'react'


const App = () => {

  const [num, setNum] = useState(0)
  // const num = 0

  return (
    <div className='container'>
      <button onClick={()=>{
        setNum(num-1)
      }} > - </button>
      <h1>{num}</h1>
      <button
        onClick={()=>{
          setNum(num+1)
        }}
      > + </button>
    </div>
    
  )
}

export default App
