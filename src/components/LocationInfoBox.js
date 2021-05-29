
function LocationInfoBox({info, clicked}) {
    
    return (
        <div className= {clicked ? "location-info" : "hide"}>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id} </strong></li>
                <li>Title: <strong>{info.title} </strong></li>
                <li>Date: <strong>{info.date} </strong></li>
                <li></li>
            </ul>
            <p>Click outside of info box to close.</p>
        </div> 
    )
}

export default LocationInfoBox
