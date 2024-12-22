import React, { useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    }, [token])

  return (
    <>
      {/* return the protected route */}
      {children} 
    </>
  )
}

export default UserProtectWrapper
