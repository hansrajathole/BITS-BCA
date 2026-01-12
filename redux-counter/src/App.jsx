import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'

const App = () => {

  const count = useSelector((state)=> state.counter.value)

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <button
       onClick={()=>{
        dispatch(decrement())
       }}
      > - </button>
      <p>{count}</p>
      <button
      onClick={()=>{
        dispatch(increment())
      }}
      > + </button>
    </div>
  )
}

export default App
