import React from 'react';
import {StyleSheet,  Image, Text, TouchableOpacity, SafeAreaView, ScrollView, Platform, StatusBar} from 'react-native';

import res from '../../res/pioneiras/resources';

export default function List({ route, navigation }){
  part=route.params.part;
  res = res[part];


  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView>

        {Object.keys(res).map(key => 
          <TouchableOpacity 
            key={key}
            style={styles.itemWrapper}
            onPress={() => navigation.push('Info', {person: key})} 
          >
            <Image
              style={styles.avatar}
              source={res[key].avatar}
            />

            <Text style={styles.name}>{res[key].name}</Text>
          
          </TouchableOpacity>
        )}
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
