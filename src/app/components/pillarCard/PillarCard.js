import { Card } from "react-bootstrap"
import imgIconByState from "../../../helpers/imageIconsUtils"
import "./pillarCard.scss";

const PillarCard = ({weekDay, degree, weatherStatus, sideCard = false, top = '0', left = '0' }) => {

    const weatherImage = imgIconByState(weatherStatus);

    return(
        <Card className={`pillarCard ${sideCard ? 'sided' : ''}`} style={sideCard ? {top: top, left: left} : {}}>
            <Card.Body>
                {weekDay ? <Card.Text className="weekDay">{weekDay}</Card.Text> : ''}
                <Card.Text className="degrees">{Math.round(degree)}°</Card.Text>
                <img src={weatherImage} />
            </Card.Body>
        </Card>
    )
}

export default PillarCard;