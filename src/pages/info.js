import React from 'react'
import {
  Image, 
  StyleSheet, 
  Text, 
  View,
  ScrollView
} from 'react-native';
var{vh} = require('react-native-expo-viewport-units');

import res from '../../database/database_pioneiras';

export default function Info({ route, navigation }){

  const resources = route.params.person ?
                    res[route.params.part][route.params.person] :
                    null
 
 return (
  <ScrollView>
     <View>
      <Image
        source={resources.cover}
        style={styles.cover}
      />
      <Image
        source={resources.avatar}
        style={styles.person}
      />

      
      <Text style={styles.name}>
        {resources.name}
      </Text>
      
      <Text style={styles.flavortext}>
        {resources.flavortext}
      </Text>
      
      <Text style={styles.info}>
        {resources.text}
      </Text>
      
      <View style={styles.footer}>    

      </View>

    </View>
  </ScrollView>
 )

}

const styles = StyleSheet.create({
  cover: {
    height: '25%',
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

  flavortext: {
    position: 'relative',
    top: -vh(2),
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft:   '10%',
    marginRight:  '10%',
    fontFamily: 'PlayfairDisplay',
    marginBottom: '5%'

  },

  info: {
    marginLeft:   'auto',
    marginRight:  'auto',
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'stretch',
    fontFamily: 'OpenSansLight'
  },

  name: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: -vh(5),
    fontSize: 32,
    fontFamily: 'OpenSansLight'


  },

  footer: {

  },

})

