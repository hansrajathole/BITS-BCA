import React, { useState } from 'react'
import UserCard from './components/UserCard'
import Form from './pages/Form'

const App = () => {

  const [employeeData, setemployeeData] = useState([])




  return (
    <div className='min-h-screen w-full bg-gray-400 p-4 '>
    <Form employeeData={employeeData} setemployeeData={setemployeeData} />
   <br />
    <div className='flex flex-wrap gap-2.5 '>
      {
      employeeData.map((user ,index )=>{
        return <UserCard user={user} key={index} />
      })
    }
    </div>
    </div>
  )
}

export default App
