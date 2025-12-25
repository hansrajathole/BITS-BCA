import React, { useState } from 'react'
import UserCard from './components/UserCard'

const App = () => {

  const [data, setData] = useState([
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    age: 24,
    role: "Web Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 2,
    name: "Anjali Verma",
    email: "anjali@gmail.com",
    age: 22,
    role: "Data Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@gmail.com",
    age: 28,
    role: "AI Engineer",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 4,
    name: "Priya Singh",
    email: "priya@gmail.com",
    age: 25,
    role: "UI/UX designer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 5,
    name: "Rohit Mehta",
    email: "rohit@gmail.com",
    age: 30,
    role: "manager",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 6,
    name: "Sneha Gupta",
    email: "sneha@gmail.com",
    age: 23,
    role: "HR",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 7,
    name: "Karan Malhotra",
    email: "karan@gmail.com",
    age: 27,
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 8,
    name: "Neha Jain",
    email: "neha@gmail.com",
    age: 26,
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 9,
    name: "Vikas Yadav",
    email: "vikas@gmail.com",
    age: 29,
    role: "MERN Stack Dev",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=4000&q=100"
  },
  {
    id: 10,
    name: "Pooja Kulkarni",
    email: "pooja@gmail.com",
    age: 21,
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=4000&q=100"
  }
])


  return (
    <div className='min-h-screen w-full bg-gray-400 p-4 flex flex-wrap gap-2.5 '>
    {
      data.map((user ,index )=>{
        return <UserCard user={user}  />
      })
    }
    </div>
  )
}

export default App
