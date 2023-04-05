"use client";
import React, { useState } from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const techDSF = {
  lat: 26.02950774967995,
  lng: 88.46728367690716,
};

const libraries = ["places"];

const RiMap = ({
  centerPosition,
  onMapClick,
  isMarkerShown,
  markerPosition,
  isMarkerDraggable,
  onMarkerDragEnd,
  isAutoCompleteShown,
  onAutoCompletePlaceChanged,
}) => {
  const [autocomplete, setAutocomplete] = useState(null);

  function onLoad(autocomplete) {
    setAutocomplete(autocomplete);
  }

  function onPlaceChanged() {
    if (autocomplete !== null) {
      onAutoCompletePlaceChanged(autocomplete);
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerClassName="w-full h-full"
          zoom={14}
          center={centerPosition || techDSF}
          onClick={onMapClick}
        >
          {isMarkerShown && (
            <Marker
              position={markerPosition}
              draggable={isMarkerDraggable}
              onDragEnd={onMarkerDragEnd}
            />
          )}
          {isAutoCompleteShown && (
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                onKeyDown={(e) => {
                  e.key === "Enter" && e.preventDefault();
                }}
                placeholder="Search..."
                className="absolute left-1/2 top-2 px-4 py-2 w-[240px] -ml-[120px] rounded shadow-xl ring-2 ring-brand/50"
              />
            </Autocomplete>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default React.memo(RiMap);
