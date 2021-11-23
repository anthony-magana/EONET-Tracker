import {useState} from 'react'

import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import StormMarker from './StormMarker'
import VolcanoMarker from './VolcanoMarker'
import LocationInfoBox from './LocationInfoBox'

function Map({eventData, center, zoom}) {
    const [fireInfo, setFireInfo] = useState(null)
    const [stormInfo, setStormInfo] = useState(null)
    const [volcanoInfo, setVolcanoInfo] = useState(null)
    const [fireClicked, setFireClicked] = useState(true)
    const [stormClicked, setStormClicked] = useState(true)
    const [volcanoClicked, setVolcanoClicked] = useState(true)
    
    const fireMarkers = eventData.map(ev => {
        if(ev.closed === null && ev.categories[0].id === "wildfires" && (ev.geometry[0].type === "Point")){
            return <FireMarker 
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} 
                onClick={() => {
                    setFireInfo({id: ev.id, category: ev.categories[0].title, title: ev.title, date: ev.geometry[0].date}) 
                    setFireClicked(true)
                    setStormClicked(false)
                    setVolcanoClicked(false)
                }}
                key={ev.id}
            />
        }
        return null
    })
    const stormMarkers = eventData.map(ev => {
        if(ev.closed === null && ev.categories[0].id === "severeStorms" && (ev.geometry[0].type === "Point")){
            return <StormMarker 
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} 
                onClick={() => {
                    setStormInfo({id: ev.id, category: ev.categories[0].title, title: ev.title, date: ev.geometry[0].date}) 
                    setStormClicked(true) 
                    setFireClicked(false)
                    setVolcanoClicked(false)
                }}
                key={ev.id}
            />
        }
        return null
    })
    const volcanoMarkers = eventData.map(ev => {
        if(ev.closed === null && ev.categories[0].id === "volcanoes" && (ev.geometry[0].type === "Point")){
            return <VolcanoMarker
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]} 
                onClick={() => {
                    setVolcanoInfo({id: ev.id, category: ev.categories[0].title, title: ev.title, date: ev.geometry[0].date}) 
                    setStormClicked(false) 
                    setFireClicked(false)
                    setVolcanoClicked(true)
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
                    setVolcanoClicked(false)
                }}
            >
                {fireMarkers}
                {stormMarkers}
                {volcanoMarkers}
            </GoogleMapReact>

            {fireClicked ? (fireInfo && <LocationInfoBox clicked={fireClicked} info={fireInfo}/>) : null}
            {stormClicked ? (stormInfo && <LocationInfoBox clicked={stormClicked} info={stormInfo}/>) : null}
            {volcanoClicked ? (volcanoInfo && <LocationInfoBox clicked={volcanoClicked} info={volcanoInfo}/>) : null}
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
