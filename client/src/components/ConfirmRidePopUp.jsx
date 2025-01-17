import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <h5 
          className='p-1 text-center absolute top-0 w-[93%]'
          onClick={() => props.setConfirmRidePopupPanel(false)}
        >
          <i className="text-3xl ri-arrow-down-wide-line"></i>
        </h5>

        <h3 className='text-2xl font-semibold mb-5'>Confirm to start the Ride</h3>

        <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRayxCqzUW7-WTPLuVXYJ7H1rJ2r3X2UnzQ&s" alt="" />
                <h2>Devansh Verma</h2>
            </div>
            <h5 className='text-lg font-semibold'>12.4 KM</h5>
        </div>

        <div className='flex flex-col gap-2 justify-between items-center'>

            <div className='w-full mt-5'>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-user-location-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>M303 Abode Valley</h3>
                        <p className='text-sm -mt-1 text-gray-600'>52 Kakkan Street, Potheri</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Only</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-bank-card-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>M303 Abode Valley</h3>
                        <p className='text-sm -mt-1 text-gray-600'>52 Kakkan Street, Potheri</p>
                    </div>
                </div>
            </div>

            <div className='mt-6 w-full'>
                <form onSubmit={(e) => {submitHandler(e)}}>
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type='text'
                        placeholder='Enter OTP'
                        className='bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3'
                    />

                    <Link  
                    className='w-full text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg mt-5'
                    to="/captain-riding"
                    >
                        Confirm
                    </Link>

                    <button onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                    props.setRidePopupPanel(false)
                        }} className='w-full bg-red-600 text-white font-semibold p-3 rounded-lg mt-3'>
                            Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
