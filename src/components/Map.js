import {useState} from 'react'

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

function Map({eventData, center, zoom}) {
    const [locationInfo, setLocationInfo] = useState(null)
    const [clicked, setClicked] = useState(true)
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker 
                lat={ev.geometries[0].coordinates[1]} 
                lng={ev.geometries[0].coordinates[0]} 
                onClick={() => {
                    setLocationInfo({id: ev.id, title: ev.title}) 
                    setClicked(true) 
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
                onClick={() => setClicked(false)}
            >
                {markers}
            </GoogleMapReact>

            {clicked ? locationInfo && <LocationInfoBox clicked={clicked} info={locationInfo}/> : null}
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
