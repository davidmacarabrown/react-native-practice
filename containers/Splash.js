import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Store';

import { View, Text } from 'react-native';
import colors from '../assets/colors/colors'
import StyledButton from '../components/StyledButton';

const Splash = ({navigation}) => {

    const {user, tasks} = useContext(Context)

    const [userData, setUserData] = user

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

    const enterApp = () => {
        navigation.navigate("Home");
    }

    return(
        <View style={{backgroundColor: colors.background}}>
            <Text>Splash Screen</Text>
            <StyledButton 
                text="Continue!"
                callBack={enterApp}
                color={colors.secondary}
            />
        </View>
    )
}

export default Splash;