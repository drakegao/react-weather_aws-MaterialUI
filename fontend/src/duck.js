import { combineReducers } from 'redux-immutable'; // redux immutable
import { combineEpics } from 'redux-observable';
import weatherEpic from './epics/weather-epic';
import { routerReducer } from 'react-router-redux';
import rootReducer from './rootReducer';


export default combineReducers({
    rootReducer,
    routerReducer
});

export const rootEpic = combineEpics(
    weatherEpic.getWeatherDataEpic
);

