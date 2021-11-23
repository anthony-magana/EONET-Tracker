import {Icon} from '@iconify/react'
import locationIcon from '@iconify-icons/twemoji/volcano'

function VolcanoMarker({ lat, lng, onClick }) {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="volcano-icon" />
        </div>
    )
}

export default VolcanoMarker
