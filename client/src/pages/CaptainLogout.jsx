import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const logoutCaptain = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                navigate('/captain-login')
                return
            }
            try {
                const response = await axios.get('http://localhost:5005/api/captains/logout', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Logout failed:', error);
                // Optionally, navigate to the login page or show an error message
                navigate('/captain-login');
            }
        };

        logoutCaptain();
    }, []);

    return (
    <div>
        Captain Logout
    </div>
  )
}

export default CaptainLogout
