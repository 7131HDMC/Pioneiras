import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tree from './main';
import List from './pages/list';
import Info from './pages/info'

const Stack = createStackNavigator();

function Routes() {
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
export default Routes;