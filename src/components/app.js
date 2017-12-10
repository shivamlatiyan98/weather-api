import React, { Component } from 'react';

import  Searchbar from  '../containers/search_bar';

import Weatherlist from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      < Searchbar/>

      <Weatherlist />


      </div>
    );
  }
}
