import { getDateName } from "../../utils/common"

const DayForcast = ({ weather }) => {
  return (
    <div>
        <p>{getDateName(weather.date)} | {weather.date}</p>
        <p>Sunrise - {weather.astro.sunrise}</p>
        <p>Sunset - {weather.astro.sunset}</p>
        <p>Sunset - {weather.astro.sunset}</p>
        <p>Moonrise - {weather.astro.moonrise}</p>
        <p>Moonset - {weather.astro.moonset}</p>
        <p>Moon Phase - {weather.astro.moon_phase}</p>


        <p>day</p>
        <p>Avg. Humidity - {weather.day.avghumidity}</p>
        <p>Avg. Tempreture - {weather.day.avgtemp_c} °C</p>
        <p>Max. Tempreture - {weather.day.maxtemp_c} °C</p>
        <p>Min. Tempreture - {weather.day.mintemp_c} °C</p>
        <p>Max. Wind - {weather.day.maxwind_kph} Kph</p>
        <p>Probability of daily rain - {weather.day.daily_chance_of_rain} %</p>
        <p>Condition - {weather.day.condition.text} | Code - {weather.day.condition.code}</p>
    </div>
  )
}

export default DayForcast