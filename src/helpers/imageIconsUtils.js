import Sunny from "../assets/img/weatherStateIconsImages/Sunny.png";

const imgIconByState = weahterState => {
    return imgIconsWeatherMap[weahterState];
}

const imgIconsWeatherMap = {
    'Sunny': Sunny
}

export default imgIconByState;