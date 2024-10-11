"use client"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const MapContainer = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  }

  const defaultCenter = {
    lat: 23.049060943449003,
    lng: 72.50872468310207,
  }

  const apiKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!apiKEY) {
    throw new Error("Missing Google Maps API key.")
  }

  return (
    <LoadScript googleMapsApiKey={apiKEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer