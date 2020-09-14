import React, {useState, useEffect} from 'react';
import * as Font  from 'expo-font';
import { ActivityIndicator } from 'react-native-paper';
import {StatusBar} from 'react-native';

import Routes from '~/routes';
import { customFonts } from '~/assets/fonts';
import Load from '~/services/load';


const net = new Load();

/**
 * 
 * @author Hari Dasa <haridasafiuza@gmail.com>
 */
class MainScreen 
{
    const [fontsLoaded, setFontsLoad] =  useState();

    UNSAFE_componentWillMount =  async() => {

        await Font.loadAsync(customFonts);
        setFontsLoad(true);

        net.CheckConnectivity();
    }

    render(){
        if(this.fontsLoaded)
            return (
                <StatusBar
                    backgroundColor="transparent"
                    translucent
                    barStyle="light-content"
                />
                <Routes />
            );
        
        return (
            <ActivityIndicator/>
        );
    }
} 
export default MainScreen;
