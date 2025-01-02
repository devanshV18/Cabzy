import React from 'react'
import LiveTracking from '../components/LiveTracking'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { useRef} from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LOcationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'


const Home = () => {

  const [pickUpLocation, setPickUpLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)


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
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])



  return (
    <div className='h-screen relative overflow-hidden'>
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

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclePanel = {setvehiclePanel}/>
        </div>

      </div>


      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel = {setConfirmRidePanel} setvehiclePanel = {setvehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel = {setConfirmRidePanel} />
      </div>

    </div>
  )
}

export default Home
