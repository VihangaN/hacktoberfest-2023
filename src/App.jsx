import { useEffect, useRef, useContext, useState } from 'react';
import './App.scss';
import MapView from './components/Map';
import NavBar from './components/CountrySelect';
import 'bootstrap/dist/css/bootstrap.css';
import { Appcontext } from './context/appContext';
import axios from 'axios';
import constants from './utils/constants';

function App() {
  
  const mapRef = useRef();
  const [locationData, setLocationData] = useState();
  const { activeCountry } = useContext(Appcontext);

  useEffect(() => {
    mapRef?.current.highlightCountry(activeCountry?.code);
  }, [activeCountry]);

  useEffect(() => {
    let unmounted = false;
    const getCurrentLocation = async () => {
      await axios.get('https://ipapi.co/json/').then((res) => {
        if (res.status === 200) {
          if (!unmounted) {
            getWeather(res.data.country_name);
          }
        }
      });
    }
    getCurrentLocation();
    return () => {
      unmounted = true;
    }
  }, []);

  useEffect(() => {
    if (activeCountry) {
      getWeather(activeCountry.name);
    }
  }, [activeCountry]);

  const getWeather = async (countryName) => {
    await axios.get(`${constants.WEATHER_API_BASE_URL}/current.json`, {
      params: {
        key: constants.WEATHER_API_KEY,
        q: countryName,
        aqi: 'no'
      }
    }).then((res) => {
        setLocationData(res.data);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main-container">
      <nav className="top-nav-bar">
        <NavBar />
      </nav>
      <div className="map-view-container">
        <MapView ref={mapRef} />
      </div>
      <div className="footer-bar"></div>
    </div>
  );
}

export default App;
