import { getCenter } from "geolib";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

const MapBox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const cordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(cordinates);
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/meer-habib/ckzjlps4r00dc14l9fw6zq2ek"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={(nextViewport) => setViewState(nextViewport.viewState)}
    >
      {searchResults.map(({ lat, long, title }) => (
        // console.log(lat, long)
        <div key={lat}>
          <Marker
            latitude={lat}
            longitude={long}
            offsetLeft={-20}
            offsetRight={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation({ title, long })}
              className="cursor-pointer hover:animate-bounce text-2xl"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === long ? (
            <Popup
              closeOnClick={true}
              latitude={lat}
              longitude={long}
              onClose={() => setSelectedLocation({})}
            >
              {title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
