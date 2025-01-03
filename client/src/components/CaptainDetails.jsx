import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
              <div className='flex items-center justify-bewtween gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1413761196/photo/happy-mature-man-driving-car.jpg?s=612x612&w=0&k=20&c=cHortB6t2CuIicx-UzOiq2jyfXufja9vETTN9dmThG4=" alt="" />
                <h4 className='text-lg font-medium'>Harsh Upadhyay</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold'>₹295.20</h4>
                <p className='text-sm text-gray-600'>Earned</p>
              </div>
            </div>

            <div className='flex justify-center gap-5 items-start p-3 bg-gray-100 rounded-md mt-8'>
              <div className='text-center '>
                <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>

              <div className='text-center '>
                <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>

              <div className='text-center '>
              <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
            </div>
    </div>
  )
}

export default CaptainDetails
