import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
var{vw, vh, vmin, vmax} = require('react-native-expo-viewport-units');

const person = 'rosa-parks';

const cover = require(`../../res/pioneiras/${person}/cover.jpeg`);
const avatar = require(`../../res/pioneiras/${person}/avatar.jpg`);

import res from '../../res/pioneiras/resources';

export default function Info({ navigation }){

  const resources = navigation.getParam('person') ?
                    res[navigation.getParam('person')] :
                    null
 
 return (
   <View>
    <Image
      source={resources.cover}
      style={styles.cover}
    />
    <Image
      source={resources.avatar}
      style={styles.person}
    />

   <Text style={styles.info}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </Text>
   </View>
 )

}

const styles = StyleSheet.create({
  cover: {
    height: '40%',
    width: '100%'
  },

  person: {
    position: 'relative',
    top: -vh(10),

    marginLeft:   'auto',
    marginRight:  'auto',

    borderColor: '#FFF',
    borderWidth: 5,
    borderRadius: 100,
    
    width: vh(20),
    height: vh(20)
  },

  info: {
    paddingHorizontal: 10,
    fontSize: 16
  },

})

