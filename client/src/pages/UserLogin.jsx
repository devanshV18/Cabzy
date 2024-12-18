import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user, setUser } = useContext(UserDataContext)
  const navigateTo = useNavigate()


  const submitHandler = async(e) => {
    e.preventDefault()
    const credentials = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/login',
        credentials
      )
  
      if(response.status == 200){
        // console.log(response)
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigateTo('/home')
      }
    } catch (error) {
      console.log("ERR", error)
    }

  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <Link to='/'>
      <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      </Link>

      <form onSubmit={submitHandler}>
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
