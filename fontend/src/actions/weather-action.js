import { createAction } from 'redux-act';


const getWeatherData = createAction('get weather data', (data) => {
    console.log('get weather data action is fired');
    return data;
});


const getWeatherDataEpic = createAction('get weather data epic', (weatherData) => {
        return weatherData; 
});

const setWeatherStatus = createAction('set weather status');



const setWeatherStatusEpic = createAction('set weather status epic', (status) => ({ status }));

export default {
    getWeatherData,
    getWeatherDataEpic,
    setWeatherStatus,
    setWeatherStatusEpic
};
