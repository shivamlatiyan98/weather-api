const Api_key='992595cdc79e14f7531137d092613d35';
export const FETCH_WEATHER='fetch_weather';

import  axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Api_key}`;


export function  featchweather(city) {



const url=`${ROOT_URL}&q=${city},IN`;

const request=axios.get(url);




console.log('action is genertaed request log',request);



    return {
        type: FETCH_WEATHER,
        payload: request

    }
}






