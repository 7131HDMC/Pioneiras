import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
var{vh} = require('react-native-expo-viewport-units');

import res from '../../res/pioneiras/resources';

export default function Info({ route, navigation }){

  const resources = route.params.person ?
                    res[route.params.part][route.params.person] :
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
    {resources.text}
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

