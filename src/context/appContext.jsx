/* eslint react/prop-types: 0 */
import React, { createContext, useState } from 'react';

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [activeCountry, setActiveCountry] = useState({
    code: '',
    name: '',
  });
  const [userIp, setUserIp] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const data = {
    activeCountry,
    setActiveCountry,
    userIp,
    setUserIp,
    weatherData,
    setWeatherData,
  };

  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export { AppProvider, Appcontext };
