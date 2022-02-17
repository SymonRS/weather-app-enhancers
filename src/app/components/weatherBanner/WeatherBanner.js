import {Card} from "react-bootstrap"
import sunnyWeatherImg from "../../../assets/img/weatherStateImages/sunny weather.jpg"

export const WeatherBanner = ({cityName, date, weatherStatus}) => {

    return (
        <Card>
            <Card.Img src={imageWeatherMap[weatherStatus]} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>
                    <span>{cityName}</span>
                </Card.Title>
                <Card.Text><span>{date}</span></Card.Text>
                <Card.Text><span>{weatherStatus}</span></Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

const imageWeatherMap = {
    'Sunny': sunnyWeatherImg
}

export default WeatherBanner;
