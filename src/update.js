import React, { Component } from "react";


class UpdateData extends Component {
    state = { result: [] }

    getPioneers = () => fetch('https://github.com/7131HDMC/Pioneiras/tree/master/res/pioneiras/resources.js')
     .then((response)  => {
        state = { result: response }; 
        console.log(this.state.result)
        console.log("result");
        

     })
     .catch((error) => {
        console.error(error);
     })

    
}

export default UpdateData;
