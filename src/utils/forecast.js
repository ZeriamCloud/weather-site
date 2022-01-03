const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d36bbddeaa502e7a86114beb4d7010ba&query=${latitude},${longitude}`;

    request({url, json:true}, (error, {body}) => {     
        if(error) {
            callback(`Unable to connect to weather service.`, undefined);     
        }else if (body.error) {
            callback('Unable to find location', undefined);  
        } else {
            callback(undefined, `It is currently ${body.current.weather_descriptions[0]} at a temperature of ${body.current.temperature} degrees Celcius. There is a UV Index of ${body.current.uv_index}.`);
        }
    }
    )
}

module.exports = forecast