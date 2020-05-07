/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component }  from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {
	StyleSheet,
	Text,
	Alert,
	View,
} from 'react-native';
import  ImageMapper from 'react-native-image-mapper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function handlePress(item, idx, event, navigation){
		if(item.id == 0){
			 navigation.navigate('List');

			console.log('8');		
		} else 
			if(item.id == 1){
                        	console.log('Tronco');                
                	}else
	                        if(item.id == 2){
                               		 console.log('Copa');
                        }

                
	}

export default function Tree ({navigation}) {
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

				<ImageMapper 
					imgHeight={height} 
					imgWidth={width} 
					imgMap={MAPPING}  
					imgSource={imageLogo} 
					onPress={(item, idx, event) => 
							navigation.navigate('List', { part : item.name } )
						}
				/>

			</Container>			
		);

	

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
    		flex: 5,
	},

});

const imageLogo = require('../assets/LOGO.jpg');
const  height = 500
const  width = 365
const MAPPING = [
  {
    id: '0',
    name: 'root',
    shape: 'rectangle',
    width: 365,
    height: 200,
    x1: 0,
    y1: 341,
  },
  {
    id: '1',
    name: 'body',
    shape: 'rectangle',
    width: 365,
    height: 60,
    x1: 0,
    y1: 280
  }, 
{
    id: '2',
    name: 'crown',
    shape: 'rectangle',
    width: 365,
    height: 279,
    x1: 0,
    y1: 0
  },

]