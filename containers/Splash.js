import React from 'react';

import {Button, View, Text} from 'react-native';
import colors from '../assets/colors/colors'

const Splash = ({navigation}) => {

    return(
        <View style={{backgroundColor: colors.background}}>
            <Text>Splash Screen</Text>
            <Button title="Continue" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    )
}

export default Splash;