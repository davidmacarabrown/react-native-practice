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

import Profile from './Profile'

const Home = ({navigation}) => {

    const [userData, setUserData] = useState(null)
    const [userLoading, setUserLoading] = useState(true)

    const loadUserData = function(userId){
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => alert(error))
        .finally(setUserLoading(false))
    }

    useEffect(() => {
        loadUserData(1)
    }, [])

    return(
        <View>
            { userData === null ? 
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
            :
            <SafeAreaView>
                <Profile props={userData}></Profile>
            </SafeAreaView>
            }
        </View>
    )
}

export default Home;