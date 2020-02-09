/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

var ImageMapper = require("react-image-mapper");

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Alert,
	View,
	Image,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e4e4e4',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
    		flex: 5,
	},

});




function handlePress(evt){
	if(evt.nativeEvent.locationY > 440){
		Alert.alert(` RAIZ: y is ${evt.nativeEvent.locationY}`);
	}
	if(evt.nativeEvent.locationY < 460 && evt.nativeEvent.locationY > 340){
		Alert.alert(` Tronco: y is ${evt.nativeEvent.locationY}`);
	}
	if(evt.nativeEvent.locationY > 40 && evt.nativeEvent.locationY < 340){
		Alert.alert(` Copa: y is ${evt.nativeEvent.locationY}`);
	}


}

export default class App extends React.Component {
	render(){
		return (
		<Container>
			<Header>
			    	<Left>
			      		<Button transparent>
			        		<Icon name='menu' />
					</Button>
				</Left>
				<Body>
					<Title>PioneirasBr</Title>
				</Body>
				<Right/>
			</Header>

			<Content>	
				<View style={styles.container}>
					<TouchableOpacity onPress={(evt) => handlePress(evt)}>
						<Image style={styles.logo} resizeMode='cover'source={require('../res/LOGO.jpg')}/>
					</TouchableOpacity>
				</View>
			</Content>
		</Container>
		);
	}
}
