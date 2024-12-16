import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setCaptainData({
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
      <img className='w-16 mb-10' src='https://pngimg.com/d/uber_PNG24.png'/>
      </Link>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>Captain Email?</h3>

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
        className='bg-[#10b461] text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Login
        </button>

      </form>

      <p className='text-center font-medium'>Join our fleet! <Link to='/captain-signup' className='text-black font-medium'>Register</Link></p>

      </div>

      <div>
      <Link to='/login' 
        className='flex items-center justify-center bg-black text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
      >User Sign In
      </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
