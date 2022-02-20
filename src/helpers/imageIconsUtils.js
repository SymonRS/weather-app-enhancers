import Sunny from "../assets/img/weatherStateIconsImages/Sunny.png";
import ModRain from "../assets/img/weatherStateIconsImages/ModRain.png";
import Cloudy from "../assets/img/weatherStateIconsImages/Cloudy.png";

const imgIconByState = weahterState => {
    return imgIconsWeatherMap[weahterState];
}

const imgIconsWeatherMap = {
    'Sunny': Sunny,
    'ModRain': ModRain,
    'Cloudy': Cloudy
}

export default imgIconByState;