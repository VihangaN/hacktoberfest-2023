/* eslint react/prop-types: 0 */
import React, { createContext, useState } from 'react';

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [activeCountry, setActiveCountry] = useState({
    code: '',
    name: '',
  });

  const data = {
    activeCountry,
    setActiveCountry,
  };

  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export { AppProvider, Appcontext };
