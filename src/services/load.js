
import React, { Component } from "react";
import { Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import UpdateData from './update';

 
 const pioneers = new UpdateData();
class Load extends Component
{

  CheckConnectivity = () => {

    NetInfo.fetch().then(state => {
      if(state.isConnected)
      {
        pioneers.getPioneers();
      }
    });
  }

  
}


export default Load;
