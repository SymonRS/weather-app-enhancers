import Sunny from "../assets/img/weatherStateIconsImages/Sunny.png";
import ModRain from "../assets/img/weatherStateIconsImages/ModRain.png";
import Cloudy from "../assets/img/weatherStateIconsImages/Cloudy.png";
import Thunderstorm from "../assets/img/weatherStateIconsImages/Thunderstorm.png"

const imgIconByState = weahterState => {
    return imgIconsWeatherMap[weahterState];
}

const imgIconsWeatherMap = {
    'Thunderstorm':Thunderstorm,
    'Drizzle': Cloudy,
    'Rain': ModRain,
    'Snow': Cloudy,
    'Clouds': Cloudy,
    'Mist': Cloudy,
    'Smoke': Cloudy,
    'Haze': Cloudy, 
    'Dust': Cloudy,
    'Fog': Cloudy,
    'Sand': Cloudy,
    'Ash': Cloudy,
    'Squall': Cloudy,
    'Tornado': Cloudy,
    'Clear': Sunny
}

export default imgIconByState;