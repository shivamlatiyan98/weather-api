import React, { Component } from 'react';
import l from "lodash";


import { Sparklines, SparklinesLine ,SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends Component {

    constructor(props){
        super(props);


    }

     average(data) {
        return l.round(l.sum(data) / data.length);
    }



    render() {
        // const height=this.props.height;
        // const width=this.props.width;
        const temparray=this.props.temparray;
        const color=this.props.color;
        return (
           <div>
            <Sparklines height={120} width={180} data={temparray}>
                <SparklinesLine color={color}>

                </SparklinesLine>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
               <div>
                   {this.average(temparray) } {this.props.units}

               </div>

           </div>

        );
    }
}