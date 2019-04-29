//import _forEach from 'lodash/forEach';
import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import actions from '../actions/weather-action';

const DEFAULT_STATE = fromJS({
});

var filterWeatherData = (data) => {
    console.log('filterweatherdata');
    console.log(data['headers']);
    let list = [];
    list = data.map((d) => {
        let w = {
            icon: d.icon,
            description: d.description,
            id: d.id,
            main: d.main
        };
        return w;
    });
    return fromJS(list);
}

export default createReducer({
    [actions.getWeatherDataEpic]: (state, payload) => {
        return state.set('weathers', filterWeatherData(payload))
                    .set('status', 'LOADED');
    },
    [actions.setWeatherStatus]: (state, payload) => {
        console.log(payload);
        return state.set('status', payload);
    }
}, DEFAULT_STATE);






