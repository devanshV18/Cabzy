import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "24B, Near Abode Valley, M303 Chennai",
        "24B, Near Estancia towers, M303 Chennai",
        "24B, Near VGN Southern Avenue, M303 Chennai",
        "24B, Near DCC Aishwarya, M303 Chennai"
    ]

  return (

    <div>
        {/* sample data */}
        {
            locations.map((location, index) => {
                return(
                <div onClick={() => {
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} 
                key={index} 
                className='flex gap-4 border-2 p-3 rounded-xl items-center justify-start my-1 border-gray-100 active:border-black'
                > 
                    <h2 className='text-black bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                    <h4 className='text-lg'>{location}</h4>
                </div>
                )
            })
        }
        
        
    </div>
  )
}

export default LocationSearchPanel
