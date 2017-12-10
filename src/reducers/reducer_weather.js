import  { FETCH_WEATHER } from  '../actions/index';

export  default function (state=[],action) {

    switch (action.type){

        case FETCH_WEATHER:
           // return state.concat([action.payload.data]);
      // array of cities data
 // new version of state[(city),(city)]

            console.log([ [action.payload.data],...state])

            return [action.payload.data, ...state];
    }




    return state

}