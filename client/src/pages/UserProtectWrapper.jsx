import React, { useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

        axios.get('http://localhost:5005/api/users/profile',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then( response => {
            if(response.status == 200){
              setUser(response.user)
              setIsLoading(false)
            }
          }).catch( err => {
            localStorage.removeItem('token')
            navigate('/login')
          })
    }, [token])

  return (
    <>
      {/* return the protected route */}
      {children} 
    </>
  )
}

export default UserProtectWrapper
