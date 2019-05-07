import { Set } from 'immutable';
import { createSelector } from 'reselect';

const getRootState = (state) => {
    return state.get('rootReducer');
}

const getWeatherAllState = createSelector(getRootState, (rootState) => {
   
    return rootState.getIn(['weather']);
});


const getWeatherState = createSelector(getWeatherAllState, 
    (weatherState) => { console.log(weatherState.get('weathers', Set()).toJS()); return weatherState.get('weathers', Set()) }
);

const getWeatherStatus = createSelector(
    getWeatherAllState,
    (weather) => {
        return weather.get('status');
    }
);

const getHasWeather = createSelector(
    getWeatherAllState,
    (weather) => {
        console.log('has detail selector action');
        return weather.get('hasDetail');
    }
);

export default  {
    getHasWeather,
    getWeatherState,
    getWeatherStatus
};