//import _forEach from 'lodash/forEach';
import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import singleWeatherActions from '../actions/single-weather-action';
import weatherActions from '../actions/weather-action';

const DEFAULT_STATE = fromJS({
});

var filterWeatherData = (dataRet) => {
    console.log('filterweatherdata');
    console.log(data);

    //console.log(data['headers']);
    let list = [];
    var data = dataRet.data;
    list = data.map((d) => {
        let w = {
            icon: d.icon,
            description: d.description,
            id: d.id,
            main: d.main,
            city: d.city,
            time: d.time
        };
        return w;
    });
    console.log(list);
    return fromJS(list);
}

export default createReducer({
    // this is setter, not getter
    [weatherActions.getWeatherDataEpic]: (state, payload) => {
        return state.set('weathers', filterWeatherData(payload))
                    .set('status', 'LOADED');
    },
    [singleWeatherActions.getHasDetail]: (state, payload) => {

    },
    [weatherActions.setWeatherStatus]: (state, payload) => {
        return state.set('status', payload);
    },
    [singleWeatherActions.setHasDetail]: (state, payload) => {
        console.log(`set has detail ---- ${payload}`);
        let ret = state.set('hasDetail', payload);
        console.log(ret.toJS());
        return ret;
    }
}, DEFAULT_STATE);






