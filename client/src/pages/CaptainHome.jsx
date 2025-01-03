import React, { useState } from 'react'
import {Link} from "react-router-dom"
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'



const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const confirmRidePopupPanelRef = useRef(null)
  const ridePopupPanleRef = useRef(null)


  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanleRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanleRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])


  return (
    <div className='h-screen'>

        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/home' className = 'h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="ri-logout-circle-r-line"></i>
          </Link>
        </div>

        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''/>
        </div>
       
        <div className='h-2/5 p-6'>

            <CaptainDetails/>
            
        </div>

        <div ref={ridePopupPanleRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
          <RidePopUp setRidePopupPanel = {setRidePopupPanel} setConfirmRidePopupPanel = {setConfirmRidePopupPanel}/>
        </div>

        <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
          <ConfirmRidePopUp setConfirmRidePopupPanel = {setConfirmRidePopupPanel} setRidePopupPanel = {setRidePopupPanel} />
        </div>
    </div>
  )
}

export default CaptainHome
