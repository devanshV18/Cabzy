import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                navigate('/login')
                return
            }
            try {
                const response = await axios.get('http://localhost:5000/api/users/logout', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Logout failed:', error);
                // Optionally, navigate to the login page or show an error message
                navigate('/login');
            }
        };

        logoutUser();
    }, []);

    return (
    <div>
        User Logout
    </div>
  )
}

export default UserLogout
