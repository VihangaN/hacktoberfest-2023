import { useEffect, useRef, useContext } from 'react';
import './App.scss';
import MapView from './components/Map';
import NavBar from './components/CountrySelect';
import 'bootstrap/dist/css/bootstrap.css';
import { Appcontext } from './context/appContext';
import axios from 'axios';

function App() {
  const mapRef = useRef();
  const { activeCountry } = useContext(Appcontext);

  useEffect(() => {
    mapRef?.current.highlightCountry(activeCountry?.code);
  }, [activeCountry]);


  useEffect(() => {
    let unmounted = false;

    const getCurrentLocation = async () => {
      await axios.get('https://ipapi.co/json/').then((res) => {
        if(res.status === 200) {
          if (!unmounted) {
            console.log(res.data);//returns current user location by ip address
          }
        }
      });
    }

    getCurrentLocation();

    return () => {
      unmounted = true;
    }
  }, []);

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
