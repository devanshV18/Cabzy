import React, { useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'


const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    //checks for token as soon as page renders (first render)
    useEffect(() => {
        if(!token){
            navigate('/captain-login')
        }

        axios.get(
            'http://localhost:5005/api/captains/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )
            .then(response => {
                if(response.status == 200){
                    setCaptain(response.data.captain)
                    setIsLoading(false)
                }
            })
            .catch( err => {
                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }
    
    , [token])

    if(isLoading){
        return(
            <Spinner/>
        )
    }


  return (
    <>
      {/* return the protected route */}
      {children} 
    </>
  )
}

export default CaptainProtectWrapper
