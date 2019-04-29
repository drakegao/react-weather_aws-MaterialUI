import weatherReducer from './reducers/weather-reducer';
import { fromJS, Map } from 'immutable';

const DEFAULT_STATE = fromJS({
    'weather': {
        status: 'NONE'
    }
});


export default (state = DEFAULT_STATE, action) => {
    let defaultState = DEFAULT_STATE;

    return defaultState.set('weather', weatherReducer(state.get('weather'), action))
}

