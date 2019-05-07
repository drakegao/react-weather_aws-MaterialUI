import { mergeMap, switchMap, first } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import axios from 'axios';
import * as RXJS from 'rxjs';
import config from '../config';
import actions from '../actions/weather-action';

// var getWeatherData = (payload) => {
//     return axios.get(
//         `${config.server}/getWeather/${payload.city}/${payload.country}`
//     );
// };

var getWeatherData = (payload) => {
    let axiosConfig = {
        headers: {
            //'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
            //'x-api-key': config["x-api-key"]
        }
    };
    return axios.get(
        `${config.awsGetWeatherUrl}?city=${payload.city}&country=${payload.country}`,
        axiosConfig
    );
};

var parseLambdaData = (parseDatadata) => {
    var parseData = parseDatadata;
    parseData = parseData.replace(/\\\"/g, '"');
    parseData = parseData.replace(/\"\[/g, '[');
    parseData = parseData.replace(/\]\"/g, ']');
    parseData = parseData.replace("data", '"data"');
    parseData = JSON.parse(parseData);
    return parseData;
}

const getWeatherDataEpic = action$ => {
    console.log('get weather epic in epic');
    return action$.pipe(
        ofType(actions.getWeatherData.getType()),
        switchMap(action => {
            console.log(action);
            return getWeatherData(action.payload);
        }),
        mergeMap(response => {
            console.log('from weather epic');
            var data = parseLambdaData(response.data);
            
            return RXJS.of(actions.getWeatherDataEpic(data));
        })
    );
}

const setWeatherStatusEpic = action$ => {
    return action$.pipe(
        ofType(actions.setWeatherStatus.getType()),
        switchMap(action => {
            console.log(action);
            return action.payload;
        }),
        mergeMap(response => {
            return RXJS.of(actions.setWeatherStatusEpic(response));
        })
    );
}

 // .first()
// .switchMap(() => {
//     Observable.timer(0, 200000)
// })
export default {
    getWeatherDataEpic,
    setWeatherStatusEpic
}

