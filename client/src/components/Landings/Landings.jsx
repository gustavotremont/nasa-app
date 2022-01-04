import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import './Landings.css'
import markerLogo from '../../assets/venue_location_icon.svg'
import axios from 'axios'

function Landings() {

  const icon = L.icon({ iconUrl: markerLogo, iconSize: [60, 55],popupAnchor: [-13, -30] });

  const [primaryFilter, setPrimaryFilter] = useState('')
  const [primaryValue, setPrimaryValue] = useState('')
  const [secundaryFilters, setSecundaryFilters] = useState({})
  const [landings, setLandings] = useState([])

  useEffect(() => {
    if (primaryFilter && primaryValue) {
      const getLandings = async () => {
        try {

          const endpoint = primaryFilter === 'mass' 
                ? `/api/astronomy/landings/mass/${primaryValue}/${handleSecundaryFilters(secundaryFilters)}`
                : `/api/astronomy/landings/class/${primaryValue}/${handleSecundaryFilters(secundaryFilters)}`

          console.log(endpoint);
          
          const res = await axios.get(endpoint)

          setLandings(res.data.results)     
        } catch (error) {
          console.log(error);
        }
      }
  
      getLandings()
    }
  }, [primaryFilter, primaryValue])

  const handleSecundaryFilters = ({minimumMass, yearFrom, yearTo}) => {
    let result = ''

    if (minimumMass) result = `?minimum_mass=${minimumMass}`
    if (yearFrom) result+= result !== '' ? `&from=${yearFrom}` : `?from=${yearFrom}`
    if (yearTo) result+= result !== '' ? `&to=${yearTo}` : `?to=${yearTo}`

    return result
  } 

  const handleSubmit = (event) => {

    event.preventDefault()

    const primaryFilter = event.target.primary_filter.value;
    const primaryValue = event.target.primary_value.value;
    const minimumMass = event.target.minimum_mass.value;
    const yearFrom = event.target.from.value;
    const yearTo = event.target.to.value;

    setPrimaryFilter(primaryFilter);
    setPrimaryValue(primaryValue)
    setSecundaryFilters({minimumMass, yearFrom, yearTo})
  }

  const paintMarkers = () => {
    return landings.map( (landing, i) => {
      return <Marker key={i} position={[landing.geolocation.latitude, landing.geolocation.longitude]} icon={icon}>
              <Popup>
                Name: {landing.name} <br /> 
                Mass: {landing.mass} <br />
                Year: {landing.year}
              </Popup>
            </Marker>
    })
  }


  return (
    <div>

      <form className='filter-form' onSubmit={handleSubmit}>
        <select name="primary_filter" id="primary_filter">
          <option value="mass">Mass</option>
          <option value="class">Class</option>
        </select> 

        <input type="text" name='primary_value' id='primary_value' />

        <label htmlFor="minimum_mass">minimum mass</label>
        <input type="text" id='minimum_mass' name='minimum_mass'/> 
        
        <label htmlFor="from">year from</label>
        <input type="text" id='from' name='from'/>

        <label htmlFor="to">year to</label>
        <input type="text" id='to' name='to'/>

        <input type="submit" value="Search" />
      </form>

      <MapContainer center={[ 40.4947687, -3.4367158]} zoom={3}>
        <TileLayer 
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {paintMarkers()}

      </MapContainer>
    </div>
  )
}

export default Landings

