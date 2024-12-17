import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })
    setEmail("")
    setPassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <Link to='/'>
      <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      </Link>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

        <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email' 
        placeholder='email@example.com'/>
       
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password' 
        placeholder='password'/>

        <button
        className='bg-[#111] text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Login
        </button>

      </form>

      <p className='text-center font-medium'>New Here? <Link to='/signup' className='text-black font-medium text-blue-500'>Register</Link></p>

      </div>

      <div>
      <Link to='/captain-login' 
        className='flex items-center justify-center bg-[#10b461] text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
      >Captain Sign In
      </Link>
      </div>
    </div>
  )
}

export default UserLogin
