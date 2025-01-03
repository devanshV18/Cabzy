import React from 'react'
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'
import { useState } from 'react'
import { useRef } from 'react'


const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className='h-screen relative'>  

        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-home' className = 'h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="ri-logout-circle-r-line"></i>
          </Link>
        </div>

        <div className='h-4/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''/>
        </div>
      
        <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative pt-10'
          onClick={()=> setFinishRidePanel(true)}
        >
            <h5 
              className='p-1 text-center absolute top-0 w-[95%]'
              onClick = {() => {}}
            >
              <i className="ri-arrow-up-wide-fill"></i>
            </h5> 

            <h4 className='text-xl font-semibold'>12.1 KM away</h4>

            <button
            className='bg-black text-white font-semibold p-3 px-10 rounded-lg mt-2'
            onClick={() => {}}
            >
              Complete Ride
            </button>

        </div>

        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
          <FinishRide setFinishRidePanel = {setFinishRidePanel} />
        </div>

    
    </div>
  )
}

export default CaptainRiding
