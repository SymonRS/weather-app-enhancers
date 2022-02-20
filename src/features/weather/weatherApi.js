
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