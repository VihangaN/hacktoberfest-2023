import axios from 'axios';
import { useEffect, useRef, useContext } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Appcontext } from './context/appContext';
import constants from './utils/constants';

import NavBar from './components/CountrySelect';
import Footer from './components/Footer';
import MapView from './components/Map';
import WeatherData from './components/WeatherData';

function App() {
  const mapRef = useRef();
  const { activeCountry, setActiveCountry, userIp, setUserIp, setWeatherData } =
    useContext(Appcontext);
  useEffect(() => {
    mapRef?.current.highlightCountry(activeCountry?.code);
  }, [activeCountry]);

  const setCountry = async (code, name) => {
    await setActiveCountry({
      code,
      name,
    });
  };

  useEffect(() => {
    let unmounted = false;
    const getCurrentLocation = async () => {
      await axios.get('https://ipapi.co/json/').then((res) => {
        if (res.status === 200) {
          if (!unmounted) {
            getWeather(res.data.country_name);
            setCountry(res.data?.country_code, res.data?.country_name);
            setUserIp(res.data?.ip);
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
      getWeather(activeCountry?.name);
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
        setWeatherData(res?.data.current);
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
        <WeatherData />
        <MapView ref={mapRef} />
      </div>
      <div className="footer-bar">
        <Footer
          countryCode={activeCountry.code}
          userIP={userIp}
        />
      </div>
    </div>
  );
}

export default App;
