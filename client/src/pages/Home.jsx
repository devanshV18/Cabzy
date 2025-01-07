import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import ConfirmRide from '../components/ConfirmRide'
import LocationSearchPanel from '../components/LocationSearchPanel'
import LookingForDriver from '../components/LookingForDriver'
import VehiclePanel from '../components/VehiclePanel'
import WaitingForDriver from '../components/WaitingForDriver'
import axios from "axios"



const Home = () => {

  const navigate = useNavigate()

  const [pickup, setpickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState(null)
  const [ fare, setFare ] = useState({})
  const [ vehicleType, setVehicleType ] = useState(null)
  const [ ride, setRide ] = useState(null)

  const handlePickupChange = async(e) => {
    setpickup(e.target.value)
    try {
      const response = await axios.get('http://localhost:5005/api/maps/get-suggestions', {
        params: {input: e.target.value},
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setPickupSuggestions(response.data)
    } catch (error) {
      console.log("ERR", error)
    }
  }

  const handleDestinationChange = async(e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get('http://localhost:5005/api/maps/get-suggestions', 
      {
        params: {input: e.target.value},
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch (error) {
      console.log("ERR", error)
    }
  }


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
  
  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  const findTrip = async() => {
    const tokenPrint = localStorage.getItem('token')
    console.log(tokenPrint)

    try {
      const response = await axios.get("http://localhost:5005/api/rides/get-fare", 
      {
        params: {pickup, destination},
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(response) //structure -> response.data.car/auto/moto
    } catch (error) {
      console.log("Error in frontend for getfare", error)
    }

    setvehiclePanel(true)
    setPanelOpen(false)
};

  // const createRide = async() => {
  //   const response = await axios.post('http://localhost:5005/api/rides/create', {
  //     pickup,
  //     destination,
  // }, {
  //     headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  // })

  // console.log(response)
  // }


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
            {/* //pickup */}
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
            onClick={() => {
              setPanelOpen(true)
              setActiveField('pickup')
            }
              
            }
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full'
            placeholder='Enter Pick-Up Location'
            type='text'
            value={pickup}
            onChange={handlePickupChange}
            />

            {/* destination */}
            <input
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
            onClick={() => {
              setPanelOpen(true)
              setActiveField('destination')
            }}
            placeholder='Enter Destination'
            type='text'
            value={destination}
            onChange={handleDestinationChange}
            />

          </form>
          <button 
            onClick={findTrip}
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'
          >
            Find Trip
          </button>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel 
          setPanelOpen={setPanelOpen} 
          setvehiclePanel = {setvehiclePanel}
          suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
          setpickup={setpickup}
          setDestination={setDestination}
          activeField={activeField}
          />
        </div>

      </div>


      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel = {setConfirmRidePanel} setvehiclePanel = {setvehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel = {setConfirmRidePanel} setVehicleFound = {setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 p-3 bg-white px-3 py-6 pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

    </div>
  )
}

export default Home
