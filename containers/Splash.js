import React from 'react';

import {Button, SafeAreaView, Text} from 'react-native';

const Splash = ({navigation}) => {

    return(
        <SafeAreaView>
            <Text>Splash Screen</Text>
            <Button title="Continue" onPress={() => navigation.navigate("Home")}></Button>
        </SafeAreaView>
    )
}

export default Splash;