/* eslint-disable react/prop-types */
// import React from 'react'
import "./App.css"

const DestinationCard = ({destination}) => {
  return (
    <div className="destination-card">
        <img src={destination.image} alt={destination.name}/>
        <div className="destination-card-content">
            <h2 className="destination-title">{destination.name}</h2>
            <p className="destination-location">{destination.location}</p>
            <p className="destination-description">{destination.description}</p>
            <p className="destination-price">{destination.price}</p>
        </div>
    </div>
  )
}

export default DestinationCard
