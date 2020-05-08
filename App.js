import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font  from "expo-font";
import { ActivityIndicator } from 'react-native-paper';

import Load from './src/load';
import Tree from './src/main';
import List from './src/pages/list';
import Info from './src/pages/info'


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator();
const net = new Load();

let customFonts = {
  OpenSansLight : require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
  PlayfairDisplay : require('./assets/fonts/Playfair_Display/static/PlayfairDisplay-Black.ttf'), 
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')

};

class Routes extends React.Component{
  
  state = { 
    fontsLoaded: false 
  }

  

  UNSAFE_componentWillMount =  async() => {
    
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true});

    net.CheckConnectivity();
  }

  render() {
   if (!this.state.fontsLoaded) {
      return <ActivityIndicator /> ;
    }else{
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
            name="Home" 
            component={Tree}   
            
            />

            <Stack.Screen 
            name="List" 
            component={List} 
            
            />

            <Stack.Screen 
            name="Info" 
            component={Info}
            
            />

          </Stack.Navigator>

        </NavigationContainer>
      );
    }
  }
  
}


export default Routes;