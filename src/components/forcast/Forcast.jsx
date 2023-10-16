import axios from 'axios';
import { useEffect, useCallback, useState } from 'react';
import constants from '../../utils/constants';
import DayForcast from './DayForcast';

const Forcast = ({ countryName }) => {
  const [weatherForcast, setWeatherForcast] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if (countryName) {
      if (!unmounted) {
        getForcast(countryName);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [countryName]);

  const getForcast = useCallback(async () => {
    await axios
      .get(`${constants.WEATHER_API_BASE_URL}/forecast.json`, {
        params: {
          key: constants.WEATHER_API_KEY,
          q: countryName,
          aqi: 'no',
          days: 7,
          alerts: 'no',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setWeatherForcast(res.data.forecast.forecastday);
          console.log(res.data.forecast.forecastday);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryName]);

  return (
    <div>
      <h3>Weather Forcast</h3>

      {weatherForcast &&
        weatherForcast.map((weather, key) => (
          <DayForcast key={key} weather={weather} />
        ))}
    </div>
  );
};

export default Forcast;
