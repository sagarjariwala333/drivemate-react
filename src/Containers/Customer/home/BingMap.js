import React, { useEffect, useRef } from "react";

function BingMap({ apiKey, sourceCoordinates }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=${apiKey}&callback=loadMapScenario`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.loadMapScenario = () => {
      const { latitude, longitude } = sourceCoordinates;
      const mapOptions = {
        credentials: apiKey,
        center: new window.Microsoft.Maps.Location(latitude, longitude),
        mapTypeId: window.Microsoft.Maps.MapTypeId.road,
        zoom: 15,
        minZoom: 10,
        maxZoom: 17
      };

      const map = new window.Microsoft.Maps.Map(mapRef.current, mapOptions);

      // Add a pushpin to the provided coordinates
      const pushpin = new window.Microsoft.Maps.Pushpin(map.getCenter(), {
        text: 'S',
        color: "red",
        title: "Your Location"
      });

      map.entities.push(pushpin);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey, sourceCoordinates]);

  return <div ref={mapRef} style={{ width: "300px", height: "300px" }}></div>;
}

export default BingMap;
