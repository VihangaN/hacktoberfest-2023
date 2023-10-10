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
  const [ip, setIP] = useState("0.0.0.0")
  const [country, setIPCountry] = useState("")
  const { activeCountry, setActiveCountry } = useContext(Appcontext);
  useEffect(() => {
    mapRef?.current.highlightCountry(activeCountry?.code);
  }, [activeCountry]);

  const setCountry = async (code, name) => {
    await setActiveCountry({
      code,
      name,
    });
    console.log(activeCountry, code);
  };

  useEffect(() => {
    let unmounted = false;
    const getCurrentLocation = async () => {
      await axios.get('https://ipapi.co/json/').then((res) => {
        if (res.status === 200) {
          if (!unmounted) {
            getWeather(res.data.country_name);
            setCountry(res.data?.country_code, res.data.country_name);
            setIP(res.data.ip)
            setIPCountry(res.data?.country_code)
          }
        }
      });
    };
    getCurrentLocation();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    if (activeCountry) {
      getWeather(activeCountry.name);
    }
  }, [activeCountry]);

  const getWeather = async (countryName) => {
    await axios
      .get(`${constants.WEATHER_API_BASE_URL}/current.json`, {
        params: {
          key: constants.WEATHER_API_KEY,
          q: countryName,
          aqi: 'no',
        },
      })
      .then((res) => {
        setLocationData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
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
      <div className="footer-bar">
        <img className="d-flex justify-content-start" src={`https://flagsapi.com/${country}/flat/32.png`} />
        <div className="d-flex justify-content-end" style={{ color: "white" }}>IP: {ip}</div>
      </div>
    </div>
  );
}

export default App;
