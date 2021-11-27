import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text }  from 'react-native';

const StyledButton = ({ text, callBack, color }) => {

    return(
        <View style={{
            backgroundColor: color,
            borderRadius: 12,
            marginLeft: '6%',
            marginRight: '6%',
            marginBottom: '5%'
            }}>
            <TouchableOpacity onPress={callBack}>
                <Text style={Styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 24,
        padding: '2%',
        textAlign: 'center'
    }
})

export default StyledButton;

//TODO: Make fonts in assets library