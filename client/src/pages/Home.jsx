import React from 'react'
import LiveTracking from '../components/LiveTracking'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { useRef} from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LOcationSearchPanel'


const Home = () => {

  const [pickUpLocation, setPickUpLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100)'
      })
    }
  }, [vehiclePanelOpen])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>

      <div className='h-screen w-screen'
        onClick={() => setVehiclePanelOpen(false)}
      >
        {/* temporary image for now */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''/>
        {/* <LiveTracking/> */}
      </div>

      <div className='flex flex-col justify-end h-screen top-0 absolute w-full'>

        <div className='h-[30%] p-6 bg-white relative'>
          <h5 className='absolute right-6 top-6 text-2xl opacity-0' onClick={() => setPanelOpen(false)} ref={panelCloseRef}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-xl font-semibold'>
            Find a Trip
          </h4>

          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
            onClick={() => setPanelOpen(true)}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
            placeholder='Enter Pick-Up Location'
            type='text'
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
            />

            <input
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
            placeholder='Enter Destination'
            type='text'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            />

          </form>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen = {setVehiclePanelOpen}/>
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>

        <div className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Hatchback <span><i className="ri-user-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>

        <div className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_470,w_835/v1597151185/assets/e0/815670-02de-44f4-83fa-02fdab69d751/original/Pool.jpg'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Sedan <span><i className="ri-user-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Comfortable, top drivers</p>
          </div>
          <h2 className='text-xl font-semibold'>₹279</h2>
        </div>

        <div className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688399652/assets/ba/dfb1d6-6c2b-4553-b929-9ff32f02a55e/original/UberXL.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>SUV<span><i className="ri-user-fill"></i> 6</span></h4>
            <h5 className='font-medium text-sm'>6 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Spacious SUV vehicles</p>
          </div>
          <h2 className='text-xl font-semibold'>₹423.20</h2>
        </div>

        <div className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Auto<span><i className="ri-user-fill"></i> 3</span></h4>
            <h5 className='font-medium text-sm'>8 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Auto, Quick rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹112</h2>
        </div>
        
        <div className='flex w-full border-2 active:border-black rounded-xl p-3 items-center justify-between mb-2'>
          <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Motorcycle<span><i className="ri-user-fill"></i> 1</span></h4>
            <h5 className='font-medium text-sm'>10 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Two wheeler rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹70</h2>
        </div>

      </div>
    </div>
  )
}

export default Home
