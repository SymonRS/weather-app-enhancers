import React from 'react';
import { WeatherBanner } from "./app/components/weatherBanner/WeatherBanner";
import { Container, Row, Col } from "react-bootstrap";
import "./style/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import PillarCard from './app/components/pillarCard/PillarCard';
import IconButton from './app/components/IconButton/IconButton';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={6} style={{position: 'relative'}}>
          <WeatherBanner cityName="London" date="Friday 18, September" weatherStatus="Sunny" />
          <PillarCard  degree="19°" sideCard top='2rem' left="-4rem" weatherStatus="Sunny" />
        </Col>
        <Col xs={4}>
          <IconButton style={{width: '100%'}} text='Aggiungi città' icon='SquarePlus'/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
