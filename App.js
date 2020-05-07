import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
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


class Routes extends React.Component{
   state = {
    loading: false
  }

 async componentDidMount(){
  net.CheckConnectivity();
            console.log("component!");

  
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }
  render(){
    if (this.state.loading) {
           return (
             <Root>
                <AppLoading />
            </Root>
           );
    }

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


export default Routes;