import React from 'react';
import { WeatherBanner } from "./app/components/weatherBanner/WeatherBanner";
import { Container, Row, Col } from "react-bootstrap";
import "./style/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={6}>
          <WeatherBanner cityName="London" date="Friday 18, September" weatherStatus="Sunny" />
        </Col>
        <Col xs={4}>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
