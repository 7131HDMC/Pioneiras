import React from 'react'
import {
  Image,
  ImageBackground, 
  StyleSheet,
  Text, 
  View,
  ScrollView
} from 'react-native';
var{vh} = require('react-native-expo-viewport-units');

import res from '~/database/database_pioneiras';

export default function Info({ route, navigation }){

  const RESOURCES = route.params.person ?
                    res[route.params.part][route.params.person] :
                    null
const extras = RESOURCES.extra; 
 return (
  <ScrollView>

     <View style={styles.content}>
        <View>
        <ImageBackground
            source={RESOURCES.cover}
            style={styles.cover}>
          
            <Text style={styles.name}>
              {RESOURCES.name}
            </Text>
          
          </ImageBackground>

          <Image
            source={RESOURCES.avatar}
            style={styles.person}/>

        <Text style={styles.flavortext}>
          {RESOURCES.flavortext}
        </Text>
        
        <Text style={styles.info}>
          {RESOURCES.text}
        </Text>

         {Object.keys(extras).map(key =>
           <View>

              <Text style={styles.extraTitle}>
                {extras[key].type}
              </Text>

              <Text style={styles.extraInfo}>
                {extras[key].content}
              </Text>
             </View>

          )}
                   
      </View>

      <View style={styles.footer}>    

      </View>

    </View>
  </ScrollView>
 )

}

function Item({title, content})
{
  return (
    <View>
      <Text>
        {title}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff'
  },
  cover: {
    opacity: 200,
    width: '100%',
    height: 275
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
    marginLeft:   'auto',
    marginRight:  'auto',
    marginBottom: '6%',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'OpenSansLight',
    writingDirection: 'ltr',
    letterSpacing: 0.5,
    fontWeight: "bold"

  },

  info: {
    marginLeft:   'auto',
    marginRight:  'auto',
    paddingHorizontal: 10,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'stretch',

    writingDirection: 'ltr',
    letterSpacing: 1.5,
    fontFamily: 'OpenSansLight'
  },

  name: {
    top: '40%',
    padding: '8%',
    fontWeight: 'bold',
    color: 'grey',
    alignSelf: 'center',
    fontSize: 32,
    fontFamily: 'OpenSansLight'


  },
  extraTitle: {
    padding: '8%',
    alignSelf: 'center',
    fontSize: 26,
    fontFamily: 'OpenSansLight'
  },

  extraInfo: {
    margin:  20,
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'stretch',
    writingDirection: 'ltr',
    letterSpacing: 0.6,
    fontFamily: 'OpenSansLight'
  },

  footer: {
    height: 150
  },

})

