import React from 'react';
import {StyleSheet,  Image, Text, TouchableOpacity, SafeAreaView, ScrollView, Platform, StatusBar} from 'react-native';

const Tavatar = require('../../res/Rosaparks.jpg');


export default function List(){
  


  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView>
        <TouchableOpacity style={styles.itemWrapper}>
          <Image
            style={styles.avatar}
            source={Tavatar}
          /> 
          <Text style={styles.name}>Rosa Parks</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  
  ) 

}

const styles = StyleSheet.create({
  safe:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
    paddingHorizontal: 10
  },

  itemWrapper: {
    flexDirection: 'row',
    width: '100%',
    padding: 3,
    borderBottomWidth: 1,
    borderColor: '#ACACAC'
  },

  avatar: {
    height: 42,
    width: 42,
    borderRadius: 24,
    paddingRight: 16
  },

  name: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingLeft: 12,
    fontSize: 24,
  }
})
