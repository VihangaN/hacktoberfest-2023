import { useEffect, useRef, useContext } from 'react';
import './App.scss';
import MapView from './components/Map';
import NavBar from './components/CountrySelect';
import 'bootstrap/dist/css/bootstrap.css';
import { Appcontext } from './context/appContext';

function App() {
  const mapRef = useRef();
  const { activeCountry } = useContext(Appcontext);

  useEffect(() => {
    mapRef?.current.highlightCountry(activeCountry?.code);
  }, [activeCountry]);

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
