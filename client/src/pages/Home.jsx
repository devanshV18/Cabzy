import React from 'react'
import LiveTracking from '../components/LiveTracking'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { useRef} from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'


const Home = () => {

  const [pickUpLocation, setPickUpLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  }, [panelOpen])



  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>

      <div className='h-screen w-screen'>
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

        <div ref={panelRef} className='bg-red-500 h-0 opacity-0'>

        </div>
      </div>
    </div>
  )
}

export default Home
