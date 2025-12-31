import React from 'react'
import {useState, useEffect} from 'react'

const App = () => {


  const [val, setVal] = useState([1,2,3,4,5,6,6,6,6,8,9,10])

  const deleteHandler = ()=>{
    setVal(val.filter((elem , idx)=>{ return idx !== val.length-1}))
  }


  useEffect(() => {
    console.log("hello");
    
  }, [])
  

  return (
    <div style={{display : "flex" , gap : "10px" }}>

      {
        val.map((elem , index)=>{
            return <h1 key={index}>{elem} ,</h1>
        })
      }
      <button onClick={deleteHandler} >Delete</button>
    </div>
  )
}

export default App
