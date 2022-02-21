import { Card, Row, Col } from "react-bootstrap";
import "./timeCard.scss";
import { VscCircleLargeFilled } from "react-icons/vsc";


const TimeCard = ({forecastList}) => {
    const _forecastList = forecastList?.length && forecastList?.length < 4 ? forecastList : forecastList?.slice(0, 4);
    return(
        <Card className="timecard">
            <Card.Body>
                <div className="lineThrough"></div>
                <Row className="nowIndicator">
                    <Card.Text>Now</Card.Text>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                    {_forecastList?.map((weatherItem, i) => <TimeLine weatherItem={weatherItem} order={i} key={weatherItem.id} />)}
                </Row>
                <div className="opacityFooter"></div>
            </Card.Body>
        </Card>
    )
}

const TimeLine = ({weatherItem, order, ...props}) => {
    return(
        <Row {...props} className="timelineRow">
            <Col xs={4} className={`pastTemp ${!order ? 'firstTemp' : ''}`}>
                {Math.round(weatherItem.temp)}°
            </Col>
            <Col xs={4} className="decoratorWrapper" >
                {/* <div className="decorator"></div> */}
                <VscCircleLargeFilled className={`decorator ${!order ? 'nowDecorator' : ''}`}/>
            </Col>
            <Col xs={4} className="pastHour">
                {weatherItem.time}
            </Col>
        </Row>
    )
}

export default TimeCard;