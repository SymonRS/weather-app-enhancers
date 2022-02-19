import {Card} from "react-bootstrap"
import sunnyWeatherImg from "../../../assets/img/weatherStateImages/sunny weather.jpg"
import "./weatherBanner.scss";


export const WeatherBanner = ({cityName, date, weatherStatus}) => {

    return (
        <Card className="weatherBannerCard">
            <Card.Img  src={imageWeatherMap[weatherStatus]} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>
                    <span>{cityName}</span>
                </Card.Title>
                <Card.Text><span>{date}</span></Card.Text>
                <Card.Text className="weatherStatus"><span>{weatherStatus}</span></Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

const imageWeatherMap = {
    'Sunny': sunnyWeatherImg
}

export default WeatherBanner;
