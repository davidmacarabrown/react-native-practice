import React from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const Home = ({route, navigation}) => {

    const {text} = route.params;

    return(
        <SafeAreaView>
            <Text>{text}</Text>
            <Text>HOME SCREEN MATE</Text>
        </SafeAreaView>
    )
}

export default Home;