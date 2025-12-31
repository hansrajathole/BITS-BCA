import React, { useState } from 'react'

const UserCard = ({user}) => {

    console.log(user);
    


  return (
    <div className='h-[420px] w-[300px] bg-white rounded-xl'>
      <div className="top h-[70%] flex justify-center">
        <img src={user.image} alt="" className='h-full w-auto' />
      </div>
      <div className="bottom p-2.5">

        <h1 className='text-xl'>EmployeeId : {user.employeeId}</h1>
        <h1 className='text-2xl'>Name : {user.name}</h1>
        <p>Email : {user.email}</p>
        <b className='text-xl'>Role : {user.role}</b>
      </div>
    </div>
  )
}

export default UserCard
