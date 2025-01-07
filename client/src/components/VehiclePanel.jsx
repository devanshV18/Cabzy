import React from 'react'

const VehiclePanel = (props) => {
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

        <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Cabzy Go <span><i className="ri-user-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>$123</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Cabzy Auto <span><i className="ri-user-fill"></i> 3</span></h4>
            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Quick Rickshaw rides</p>
          </div>
          <h2 className='text-xl font-semibold'>123</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Cabzy Moto<span><i className="ri-user-fill"></i> 1</span></h4>
            <h5 className='font-medium text-sm'>6 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Beat the traffic on two wheelers</p>
          </div>
          <h2 className='text-xl font-semibold'>123</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
