import React from 'react';
import {Dimensions, Text, TouchableOpacity, Feather, Image, View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

export default function Profile ({props}) {

    console.log("================", props, "=========================")
    return(
            <View>

                <ImageBackground source={require('../assets/images/smiley-g55c246914_1280.png')} style={styles.backgroundImage}>

                    <View>
                        <Text style={styles.textLarge}>{props.username}</Text>
                    </View>

                    <View style={styles.infoContainer}>

                        <View style={styles.levelContainer}>
                            <Text style={styles.textSmall}>Level</Text>
                            <Text style={styles.textLarge}>{props.level}</Text>
                        </View>

                        <View style={styles.xpContainer}>
                            <Text style={styles.textSmall}>XP</Text>
                            <Text style={styles.textLarge}>{props.currentXp}/{props.maximumXp}</Text>
                        </View>

                        <View style={styles.healthContainer}>
                            <Text style={styles.textSmall}>Health</Text>
                            <Text style={styles.textLarge}>{props.health}</Text>
                        </View>

                    </View>

                </ImageBackground>

            </View>
    )
}

const styles = StyleSheet.create({

    backgroundImage:{
        width: '100%',
        aspectRatio: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    
    infoContainer:{
        position: 'absolute',
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    levelContainer:{
        flex: 1
    },

    xpContainer: {
        flex: 1
    },

    healthContainer: {
        flex: 1
    },
    
    textSmall:{
        fontFamily:'Raleway-Bold',
        fontSize:18,
        color:'purple',
        textAlign: 'center'
    },

    textLarge:{
        fontFamily:'Raleway-Bold',
        fontSize:32,
        color:'purple',
        textAlign: 'center'
    }
})  