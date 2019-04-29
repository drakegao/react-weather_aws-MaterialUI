// import AWS from "aws-sdk";

import middy from 'middy';
import {cors} from 'middy/middlewares';
import { success } from './common';
import config from './config';
import axios from 'axios';

const getWeatherData = (event, context, callback) => {
    //callback(null, {"event": event});
    axios.get(`${config.appApi}?q=${event.city},${event.country}&mode=json&units=metric&cnt=7&appid=${config.appId}`).then(function(data) {
        var ret = [];
        for(var i = 0; i < data.data.list.length; i++) {
            var d = {};
            d.icon = data.data.list[i].weather[0].icon;
            d.description = data.data.list[i].weather[0].description;
            d.id = data.data.list[i].weather[0].id;
            d.main = data.data.list[i].weather[0].main;

            ret.push(d);
        }
        if(ret.length > 0) {
            var response = success(ret);
            console.log('---------before sending response-------------');
            console.log(context);
            context.succeed(response);
            callback(null, response);
        } else {
            callback(null, failure({status: false, error:"Error on loading"}));
        }
    }); 
    //callback(null, {status: false, error:"Error on loading"});
}

//const getWeatherData = middy(getWeatherDataPrototype).use(cors());

module.exports = { getWeatherData }

// headers: {
// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Credentials': true,
// 'Content-Type': 'application/json'
// },