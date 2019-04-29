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

export default  {
    getWeatherState,
    getWeatherStatus
};