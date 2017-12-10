import React, { Component }  from   'react';
 import { connect } from  'react-redux';
//
// import {bindActionCreators} from 'redux';
import Chart from '../components/chart';
import l from "lodash";

import  GoogleMap from '../components/google_map';

import { Sparklines, SparklinesLine ,SparklinesReferenceLine } from 'react-sparklines';
  class Weatherlist extends  Component {


      renderweather(cityarray){
          console.log(cityarray);
const name=cityarray.city.name;
const temparray=l.map(cityarray.list.map((weather) => weather.main.temp) ,(temp) => temp-273);

          const pressures = cityarray.list.map(weather => weather.main.pressure);
          const humidities = cityarray.list.map(weather => weather.main.humidity);

       const {lon ,lat}=cityarray.city.coord;


   console.log(temparray);


          return(
            <tr key={name}>
               <td> <GoogleMap lon={lon} lat={lat} />   </td>
              <td>
                 <Chart temparray={temparray} color='orange'  units="celsius"/>
              </td>
                <td>
                    <Chart temparray={pressures} color='red'  units="hpa"/>
                </td>

                <td>
                    <Chart temparray={humidities} color='blue' units="%"/>
                </td>


            </tr>



          );

      }





render (){

    return(
      <table className='table table-hover'>

          <thead>
          <tr>
              <th>city</th>
              <th>Temperature(C)</th>
              <th>Pressure(HPA)</th>
              <th>humidity(%)</th>
          </tr>
          </thead>


          <tbody>

          {this.props.weather.map(this.renderweather)}

          </tbody>





      </table>


    );



}






}














// { weather }
function mapstatetoprops (state){
//{weather} weather =weather
    console.log(state.weather);
    return {
      weather:state.weather


    };


    // return
    //   { weather };



}

export  default connect(mapstatetoprops)(Weatherlist);




















