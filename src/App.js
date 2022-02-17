import React from 'react';
import { WeatherBanner } from "./app/components/weatherBanner/WeatherBanner";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
          <WeatherBanner cityName="London" date="Friday 18, September" weatherStatus="Sunny" />
        </Col>
        <Col xs={4}>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
