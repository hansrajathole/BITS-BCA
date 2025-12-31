import React, { useState } from 'react'

const form = ({employeeData ,setemployeeData}) => {
    
    const [name, setname] = useState('')
    const [employeeId, setemployeeId] = useState('')
    const [role, setrole] = useState('')
    const [image, setimage] = useState('')
    const [email, setemail] = useState('')

    const [error, seterror] = useState('')


    const handleSubmit = (e)=>{

        e.preventDefault()

        if(!name.trim() || !employeeId.trim() || !role.trim() || !image.trim() || !email.trim()){
            seterror("All fields are Required")
            return
        }

        const newData = {
            employeeId,
            name,
            image,
            role,
            email
        }

        setemployeeData([...employeeData , newData])

        setemail("")
        setemployeeId("")
        setname("")
        setimage("")
        setrole("")

    }

  return (
    <div className='w-full flex justify-center items-center'>
        <form 
        onSubmit={(e)=>{
            handleSubmit(e)
        }}
        className='border p-6 rounded-xl w-[400px] bg-white'>

            <label htmlFor="name">Name :</label>
            <br />
            <input 
            value={name}
            onChange={(e)=>{
                console.log(e.target.value);
                setname(e.target.value)
            }}
            id='name' type="text" className='border w-full py-1 px-2 rounded' />
            <br />
            <br />
            <label htmlFor="">Employee Id :</label>
            <br />
            <input
            value={employeeId}
             onChange={(e)=>{
                setemployeeId(e.target.value)
            }}
            type="text" className='border w-full py-1 px-2 rounded' />
            <br />
            <br />
            <label htmlFor="name">Role :</label>
            <br />
            <input
            value={role}
             onChange={(e)=>{
                setrole(e.target.value)
            }}
            type="text" className='border w-full py-1 px-2 rounded' />
            <br />
            <br />
            <label htmlFor="name">Image :</label>
            <br />
            <input
            value={image}
             onChange={(e)=>{
                setimage(e.target.value)
            }}
            type="text" className='border w-full py-1 px-2 rounded' />
            <br />
            <br />
            <label htmlFor="name">Email :</label>
            <br />
            <input
            value={email}
             onChange={(e)=>{
                setemail(e.target.value)
            }}
            type="text" className='border w-full py-1 px-2 rounded' />
            <br />
            <br />
            <div className=' flex justify-center'>

            <button className='border bg-blue-500 py-1 px-2.5 text-white rounded-2xl font-semibold text-xl ' >Submit</button>
            </div>
            {
                error && <p className='text-red-500'>{error}</p>
            }
        </form>
    </div>
  )
}

export default form
