import React from 'react';

import {Button, SafeAreaView, Text} from 'react-native';

const Splash = ({navigation}) => {

    return(
        <SafeAreaView>
            <Text>Splash Screen</Text>
            <Button title="Continue" onPress={() => navigation.navigate("Home", {text: "It worked mate"})}></Button>
        </SafeAreaView>
    )
}

export default Splash;