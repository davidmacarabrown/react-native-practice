import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Store';

import { View, Text } from 'react-native';
import colors from '../assets/colors/colors'
import StyledButton from '../components/StyledButton';

const Splash = ({navigation}) => {

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
                isDisabled={false}
            />
        </View>
    )
}

export default Splash;