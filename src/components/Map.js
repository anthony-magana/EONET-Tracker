import {useState} from 'react'

import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import StormMarker from './StormMarker'
import LocationInfoBox from './LocationInfoBox'

function Map({eventData, center, zoom}) {
    const [fireInfo, setFireInfo] = useState(null)
    const [stormInfo, setStormInfo] = useState(null)
    const [fireClicked, setFireClicked] = useState(true)
    const [stormClicked, setStormClicked] = useState(true)

    const fireMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <FireMarker 
                lat={ev.geometries[0].coordinates[1]} 
                lng={ev.geometries[0].coordinates[0]} 
                onClick={() => {
                    setFireInfo({id: ev.id, category: ev.categories[0].title, title: ev.title, date: ev.geometries[0].date}) 
                    setFireClicked(true)
                    setStormClicked(false) 
                }}
                key={ev.id}
            />
        }
        return null
    })
    const stormMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 10){
            return <StormMarker 
                lat={ev.geometries[0].coordinates[1]} 
                lng={ev.geometries[0].coordinates[0]} 
                onClick={() => {
                    setStormInfo({id: ev.id, category: ev.categories[0].title, title: ev.title, date: ev.geometries[0].date}) 
                    setStormClicked(true) 
                    setFireClicked(false)
                }}
                key={ev.id}
            />
        }
        return null
    })
    
    return (
        <div className="map" >
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyCKzQ-JkRb4XExRUuCq4z2fLGgXvI5su6U' }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={() => {
                    setFireClicked(false)
                    setStormClicked(false)
                }}
            >
                {fireMarkers}
                {stormMarkers}
            </GoogleMapReact>

            {fireClicked ? (fireInfo && <LocationInfoBox clicked={fireClicked} info={fireInfo}/>) : null}
            {stormClicked ? (stormInfo && <LocationInfoBox clicked={stormClicked} info={stormInfo}/>) : null}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 36.778259,
        lng: -119.417931
    },
    zoom: 6
}

export default Map
