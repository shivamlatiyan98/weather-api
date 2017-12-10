import React, { Component }  from   'react';
import { connect } from  'react-redux';

import {bindActionCreators} from 'redux';

import {featchweather} from "../actions";


 class Searchbar extends  Component {

   constructor(props){
       super(props);

       this.state= {term :' '};

       this.inputchangef=this.inputchangef.bind(this);
 this.submit=this.submit.bind(this);


   }

   inputchangef (event){
        this.setState({term:event.target.value});

       // console.log(event.target.value);


   }

   submit (event){
       event.preventDefault();
       this.props.featchweather(this.state.term);
       this.setState({term:''})

   }


    render (){

        return (
          <form className='input-group' onSubmit={this.submit}>
              <input   placeholder={'five days forecast for city'}

                 className='form-control' onChange={this.inputchangef}
                       value={this.state.term}
              />
           <span className='input-group-btn'>
               <button   type= 'submit' className='btn btn-secondary' >   submit</button>
           </span>


          </form>


        );



    }

















}


function mapdispatchtoprops(Dispatch) {

   return bindActionCreators({ featchweather },Dispatch)

//make sure action bind to reducers

}

export  default  connect(null,mapdispatchtoprops)(Searchbar);

