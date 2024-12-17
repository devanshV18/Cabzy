import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()

    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    console.log(userData)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <Link to='/'>
      <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      </Link>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}>

        <h3 className='text-lg font-medium mb-2'>What should we call you?</h3>

        <div className='flex gap-4 mb-6'>
        <input 
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required 
        type='text' 
        placeholder='First Name'/>

        <input 
        className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-sm'
        required 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type='text' 
        placeholder='Last Name'/>
        </div>        

        <h3 className='text-lg font-medium mb-2'>Email</h3>

        <input 
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email' 
        placeholder='email@example.com'/>
       
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password' 
        placeholder='password'/>

        <button
        className='bg-[#111] text-white font-semibold mb-2 rounded-md px-4 py-2 w-full text-lg'
        >
          Create Account
        </button>

      </form>

      <p className='text-center font-medium'>Have an Account? <Link to='/login' className='text-black font-medium text-blue-500'>Login</Link></p>

      </div>

      <div>
      <p className='text-[12px] leading-tight text-slate-600 font-medium'>
        This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Services apply</span>.
      </p>
      </div>
      </div>
    </div>
  )
}

export default UserSignup
