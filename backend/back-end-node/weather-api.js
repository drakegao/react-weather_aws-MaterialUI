var axios = require('axios');
var config = require('./config');

var getWeather = (req, res) => {
    const axiosConfig = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,DELETE',	
            'Content-Type': 'application/json',
            'x-api-key': config["x-api-key"]
        }
    }
    console.log(req.params);
    axios.get(`https://fhn0aq6md4.execute-api.us-east-1.amazonaws.com/dev/getweather?city=${req.params.city}&country=${req.params.country}`,
        axiosConfig).then(function(data) {
            console.log('`````````````````````````');
            console.log(data.data.data);
            var ret = [];
            //var retData = JSON.parse(data['data']['body']);
            //var retData = data['data'];
            var retData = data['data'];
            for(var i = 0; i < retData.length; i++) {
                var d = {};
                d.icon = retData[i].weather[0].icon;
                d.description = retData[i].weather[0].description;
                d.id = retData[i].weather[0].id;
                d.main = retData[i].weather[0].main;

                ret.push(d);
            }
            return res.json(ret);
    }).catch(function(error) {
        console.log(error);
    }); 
}

module.exports = {
    getWeather
}