import React, { useContext } from 'react';
import WEATHER_ICONS from '../common/constant/weatherIcons';
import { Appcontext } from '../context/appContext';
import Loader from './Loader';
import missingIcon from '../assets/missingIcon.svg';

export default function WeatherData() {
  const { weatherData } = useContext(Appcontext);
  const { condition, is_day, feelslike_c } = weatherData;

  const getTime = () => (condition ? (is_day ? 'day' : 'night') : 'day');

  return (
    <div className="weather-data-wrapper">
      {condition ? (
        <>
          <img
            src={WEATHER_ICONS[condition?.code][getTime()] || missingIcon}
            alt={condition?.text}
            className={!WEATHER_ICONS[condition?.code][getTime()] && 'missing-icon' }
          />
          <span className="temp-data">{feelslike_c || 0} &deg;</span>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
