import React from 'react'

const ConfirmRide = () => {
  return (
    <div>
        <h5 
            className='p-1 text-center absolute top-0 w-[93%]'
            onClick={() => {
            props.setvehiclePanel(false)
        }}
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>

        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

        <div className='flex gap-2 flex-col justify-between items-center'>
            <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png'/>

            <div className='w-full mt-5'>
                
                <div className='flex items-center gap-5 p-3 border-b-2 '>
                    <i className="ri-map-pin-user-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11 - A</h3>
                        <p className='text-md -mt-1 text-gray-600'>Jay prakash Nayaran International Airport</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2 '>
                    <i className="ri-map-pin-2-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11 - A</h3>
                        <p className='text-md -mt-1 text-gray-600'>Jay prakash Nayaran International Airport</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-bank-card-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-md -mt-1 text-gray-600'>Pay with Cash</p>
                    </div>
                </div>
            </div>

            <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
        </div>

    </div>
  )
}

export default ConfirmRide
