import React, {useContext, useEffect, useState} from 'react';
import {Context} from './Store';

import {Button, View, Text} from 'react-native';
import colors from '../assets/colors/colors'

const Splash = ({navigation}) => {

    const {user, tasks} = useContext(Context)

    const [userData, setUserData] = user
    const [taskData, setTaskData] = tasks

    const [dataLoading, setDataLoading] = useState(true)

    const userId = 1;

    const loadUserData = () => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json) => setUserData(json))
        .catch((error) => console.error(error))
        .finally(setDataLoading(false))
    }

    useEffect(() => {
        loadUserData()
    }, [])

    return(
        <View style={{backgroundColor: colors.background}}>
            <Text>Splash Screen</Text>
            <Button disabled={dataLoading} title="Continue" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    )
}

export default Splash;