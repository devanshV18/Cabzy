import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 
        className='p-1 text-center absolute top-0 w-[93%]'
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />

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

    </div>


    </div>
  )
}

export default LookingForDriver
