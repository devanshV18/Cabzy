import React from 'react';

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel, suggestions, setPickUpLocation, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickUpLocation(suggestion.structured_formatting.main_text);
    } else if (activeField === 'destination') {
      setDestination(suggestion.structured_formatting.main_text);
    }
    setVehiclePanel(true);
    setPanelOpen(false);
  };

  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(suggestion)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer hover:bg-gray-100"
        >
          <div className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </div>
          <div>
            <h4 className="font-medium">{suggestion.structured_formatting.main_text}</h4>
            <p className="text-sm text-gray-500">{suggestion.structured_formatting.secondary_text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
