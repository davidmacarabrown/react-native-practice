import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const StyledButton = ({ text, callBack }) => {

    return(
        <View>
            <TouchableOpacity onPress={callBack}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StyledButton;