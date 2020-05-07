import { Font, AppLoading } from "expo";
import React, { Component } from "react";
import { Root } from "native-base";
import { NetInfo, Platform } from "react-native";

class Load extends Component
{
	constructor(props) {
    super(props);
    this.state = { loading: true };
    this.connection = { }
  }

  async componentWillMount (){
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          Alert.alert("You are online!");
        } else {
          Alert.alert("You are offline!");
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      Alert.alert("You are online!");
    }
  };

  checkState = () => {

   /*if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    //return (
     // <Root>
      //  <AppNavigator />
      //</Root>
    //);*/
  }
}


export default Load;
