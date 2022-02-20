import { Card } from "react-bootstrap";
import imgIconByState from "../../../helpers/imageIconsUtils";
import "./weatherCard.scss";

const WeatherCard = ({city, date, time, degree, weatherStatus}) => {

    const weatherImage = imgIconByState(weatherStatus);

    return (
        <Card className="weatherCard">
            <Card.Body className="main">
                <div className="text-section">
                    <Card.Text className="cityName">{city}</Card.Text>
                    <Card.Text className="date">{date}</Card.Text>
                    <Card.Text className="time">{time}</Card.Text>
                </div>
                <div className="weather-img-container">
                    <img src={weatherImage} />
                </div>
                <div className="degree">
                    <Card.Text>{degree}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;