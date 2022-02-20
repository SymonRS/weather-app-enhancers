import React from 'react';
import { WeatherBanner } from "./app/components/WeatherBanner/WeatherBanner";
import { Container, Row, Col } from "react-bootstrap";
import "./style/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import PillarCard from './app/components/PillarCard/PillarCard';
import IconButton from './app/components/IconButton/IconButton';
import WeatherCard from './app/components/WeatherCard/WaetherCard';

function App() {
  return (
    <Container fluid="xl"  style={{padding: '2rem'}}>
      <Row>
        <Col  xs={6} lg={8} style={{position: 'relative'}}>
          <WeatherBanner cityName="London" date="Friday 18, September" weatherStatus="Sunny" />
          <PillarCard  degree="19°" sideCard top='6.5rem' left="-2rem" weatherStatus="Sunny" />
        </Col>
        <Col xs={6} lg={4} className="d-flex justify-content-between flex-column" /* style={{padding: "0 3rem"}} */>
          <div className='d-flex justify-content-center flex-column' style={{height: "8.75rem"}}>
            <IconButton style={{width: '100%'}} text='Aggiungi città' icon='SquarePlus'/>
          </div>
          {/* <IconButton style={{width: '100%'}} text='Aggiungi città' icon='SquarePlus'/> */}
          <WeatherCard city="Florence" date="Friday 18, September" time="2:38 p.m." degree="18°" weatherStatus="Cloudy" />
          <WeatherCard city="Venice" date="Friday 18, September" time="2:38 p.m." degree="20°" weatherStatus="ModRain" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
