import sunny from '@lxg/weather-icons/production/fill/svg/clear-day.svg';
import night from '@lxg/weather-icons/production/fill/svg/clear-night.svg';
import partly_cloudy from '@lxg/weather-icons/production/fill/svg/partly-cloudy-day.svg';
import partly_cloudy_night from '@lxg/weather-icons/production/fill/svg/partly-cloudy-night.svg';
import cloudy from '@lxg/weather-icons/production/fill/svg/cloudy.svg';
import overcast from '@lxg/weather-icons/production/fill/svg/overcast.svg';
import overcast_night from '@lxg/weather-icons/production/fill/svg/overcast-night.svg';
import mist from '@lxg/weather-icons/production/fill/svg/mist.svg';
import patchy_day from '@lxg/weather-icons/production/fill/svg/overcast-day-rain.svg';
import patchy_day_night from '@lxg/weather-icons/production/fill/svg/overcast-night-rain.svg';
import snowflake from '@lxg/weather-icons/production/fill/svg/snowflake.svg';

const WEATHER_ICONS = {
  [1000]: { type: 'clear', day: sunny, night },
  [1003]: {
    type: 'Partly cloudy',
    day: partly_cloudy,
    night: partly_cloudy_night,
  },
  [1006]: { type: 'Cloudy', day: cloudy, night: cloudy },
  [1009]: { type: 'Overcast', day: overcast, night: overcast_night },
  [1030]: { type: 'Mist', day: mist, night: mist },
  [1063]: {
    type: 'Patchy rain possible',
    day: patchy_day,
    night: patchy_day_night,
  },
  [1066]: 'Patchy snow possible',
  [1069]: 'Patchy sleet possible',
  [1072]: 'Patchy freezing drizzle possible',
  [1087]: 'Thundery outbreaks possible',
  [1114]: 'Blowing snow',
  [1117]: 'Blizzard',
  [1135]: 'Fog',
  [1147]: 'Freezing fog',
  [1150]: 'Patchy light drizzle',
  [1153]: 'Light drizzle',
  [1168]: 'Freezing drizzle',
  [1171]: 'Heavy freezing drizzle',
  [1180]: 'Patchy light rain',
  [1183]: 'Light rain',
  [1186]: 'Moderate rain at times',
  [1189]: 'Moderate rain',
  [1192]: 'Heavy rain at times',
  [1195]: 'Heavy rain',
  [1198]: 'Light freezing rain',
  [1201]: 'Moderate or heavy freezing rain',
  [1204]: 'Light sleet',
  [1207]: 'Moderate or heavy sleet',
  [1210]: 'Patchy light snow',
  [1213]: { type: 'Light snow', day: snowflake, night: snowflake },
  [1216]: 'Patchy moderate snow',
  [1219]: 'Moderate snow',
  [1222]: 'Patchy heavy snow',
  [1225]: 'Heavy snow',
  [1237]: 'Ice pellets',
  [1240]: 'Light rain shower',
  [1243]: 'Moderate or heavy rain shower',
  [1246]: 'Torrential rain shower',
  [1249]: 'Light sleet showers',
  [1252]: 'Moderate or heavy sleet showers',
  [1255]: 'Light snow showers',
  [1258]: 'Moderate or heavy snow showers',
  [1261]: 'Light showers of ice pellets',
  [1264]: 'Moderate or heavy showers of ice pellets',
  [1273]: 'Patchy light rain with thunder',
  [1276]: 'Moderate or heavy rain with thunder',
  [1279]: 'Patchy light snow with thunder',
  [1282]: 'Moderate or heavy snow with thunder',
};

export default WEATHER_ICONS;
