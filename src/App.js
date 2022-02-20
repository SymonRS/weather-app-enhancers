import React, { useEffect } from 'react';
import { WeatherBanner } from "./app/components/WeatherBanner/WeatherBanner";
import { Container, Row, Col } from "react-bootstrap";
import "./style/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import PillarCard from './app/components/PillarCard/PillarCard';
import IconButton from './app/components/IconButton/IconButton';
import WeatherCard from './app/components/WeatherCard/WaetherCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainCityData, fetchOtherCitiesData } from "./features/weather/weatherSlice";


function App() {
  const dispatch = useDispatch();
  const mainCityData = useSelector(state => state.weather.mainCityState);
  const otherCitiesData = useSelector(state => state.weather.otherCities)

  useEffect(() => {
    dispatch(fetchMainCityData({cityName: 'London', countryCode:'GB'}))
    dispatch(fetchOtherCitiesData());
  }, [])

  console.log('Other Cities State: ', otherCitiesData);

  return (
    <Container fluid="xl"  style={{padding: '2rem'}}>
      <Row>
        <Col  xs={6} lg={8} style={{position: 'relative'}}>
          <WeatherBanner cityName={mainCityData.name} date={mainCityData.date} weatherStatus={mainCityData.weatherStatus} />
          <PillarCard  degree={mainCityData.temp} sideCard top='6.5rem' left="-2rem" weatherStatus={mainCityData.weatherStatus} />
        </Col>
        <Col xs={6} lg={4} className="d-flex justify-content-between flex-column" >
          <div className='d-flex justify-content-center flex-column' style={{height: "8.75rem"}}>
            <IconButton style={{width: '100%'}} text='Aggiungi città' icon='SquarePlus'/>
          </div>
          {otherCitiesData.map(cityItem => <WeatherCard key={cityItem.id} city={cityItem.name} date={cityItem.date} time={cityItem.time} degree={cityItem.temp} weatherStatus={cityItem.weatherStatus} />)}
          {/* <WeatherCard city="Florence" date="Friday 18, September" time="2:38 p.m." degree="18°" weatherStatus="Cloudy" />
          <WeatherCard city="Venice" date="Friday 18, September" time="2:38 p.m." degree="20°" weatherStatus="ModRain" /> */}
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Row>
            <Col>
              Today
            </Col>
          </Row>
          <Row>

          </Row>
        </Col>
        <Col lg={5}>

        </Col>
        <Col lg={4}>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
