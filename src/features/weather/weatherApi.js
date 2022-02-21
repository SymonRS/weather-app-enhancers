
// I know that the base url should be taken from enviroment file but this create react app template doesn't have the dot-env library installed, or most probably there is but it's not exposed, so i prefer to not eject the solution
export const fetchCityWeather = async (cityName, countryCode) => {
    return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=9b0e9da41b1b3cfba73adf90a49d13b8`)
    .then(
        response => response.json().then(data => {console.log('data:', data); return data}),
    )
}

export const fetchMultipleCitiesWeather = async (cities) => {
    let result = [];
    for(let i = 0; i < cities.length; i++){
        result.push( await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i].name},${cities[i].countryCode}&units=metric&appid=9b0e9da41b1b3cfba73adf90a49d13b8`)
            .then(
                response => response.json().then(data => {console.log('data:', data); return data}),
            )
        )
    }
    return result;
}

export const fetchCityForecastByCoord = async (lat, lon) => {
    //For enhancers i can't take the real data cause they are in paid plan, anyway i will mock this data :D
    /* return await fetch(`http://api.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&cnt=4&appid=9b0e9da41b1b3cfba73adf90a49d13b8`)
    .then(
        response => response.json().then(data => {console.log('data:', data); return data}),
    ) */

    return [
        {
            id: 1,
            time: '3:00 PM',
            temp: '16.2'
        },
        {
            id: 2,
            time: '2:00 PM',
            temp: '20.1'
        },
        {
            id: 3,
            time: '1:00 PM',
            temp: '18.5'
        },
        {
            id: 4,
            time: '12:00 AM',
            temp: '18.3'
        }
    ]
}