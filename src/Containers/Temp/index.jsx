import React, { useState } from 'react';

function LocationButton() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}<br />
          Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
}

export default LocationButton;
