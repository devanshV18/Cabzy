import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 
          className='p-1 text-center absolute top-0 w-[93%]'
          onClick={() => props.setConfirmRidePanel(false)}
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>

        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

        <div className='flex flex-col gap-2 justify-between items-center'>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />

            <div className='w-full mt-5'>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-user-location-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{props.pickup}</h3>
                    </div>
                </div>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{props.fare}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Only</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-bank-card-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{props.destination}</h3>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
                }} className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
        </div>


    </div>
  )
}

export default ConfirmRide
