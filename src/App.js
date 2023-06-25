import './App.css';
import { useState } from 'react';

const App = () => {

  let [lat, setLatitude] = useState(0)
  let [long, setLongitude] = useState(0)
  let [hemisphere, setHemisphere] = useState('')
  let [month, setMonth] = useState('')

  function getHemisphere(latitude) {
    if (latitude > 0) {
      setHemisphere('Northern')
    } else if (latitude < 0) {
      setHemisphere('Southern')
    } else if (latitude === 0) {
      setHemisphere('Equator')
    }
  }

  function getCurrentLocation() {
    // navigator
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords

      setLatitude(latitude)
      setLongitude(longitude)

      getHemisphere(latitude)
    });

    let date = new Date()
    let currentMonth = date.getMonth() + 1
    setMonth(currentMonth)
  }


  return (
    <div className='weather'>
      <h3> Latitude: {lat} Longitude: {long} </h3>
      <h3> Hemisphere: {hemisphere} </h3>
      <h3> Month: {month} </h3>

      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  )
}

export default App;
