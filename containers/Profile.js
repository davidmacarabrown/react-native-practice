import React from 'react';
import {Dimensions, Text, TouchableOpacity, Feather, Image, View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

export default function Profile ({props}) {

    console.log("================", props, "=========================")
    return(
            <View style={styles.container}>

                <ImageBackground source={require('../assets/images/smiley-g55c246914_1280.png')} style={styles.backgroundImage}>

                    <View>

                        <View style={styles.profileWrapper}>
                            <Text style={styles.textLevelBox}>Level</Text>
                            <Text style={styles.textLevel}>{props.level}</Text>
                        </View>

                        <View style={styles.profileWrapper2}>
                            <Text style={styles.textHealthBox}>Health</Text>
                            <Text style={styles.textHealth}>{props.health}</Text>
                            
                        </View>

                    </View>

                </ImageBackground>

            </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },

    backgroundImage:{
        width: '100%',
        aspectRatio: 1,
        alignContent: 'space-around'
    },

    profileWrapper:{
        position: 'absolute',
        left: 0,
        bottom: 0,
        marginHorizontal:20,
        marginBottom:10,
       
    },
    profileWrapper2:{
        position:'absolute',
        right:0,
        margin:10,
        marginHorizontal:20,
        marginBottom:10,
        bottom:0,
    },

    textLevel:{
        fontFamily:'Raleway-Bold',
        fontSize:32,
        color:'purple',
    },
    textLevelBox:{
        fontFamily:'Raleway-Bold',
        fontSize:18,
        color:'purple',
    },
    textHealth:{
        fontFamily:'Raleway-Bold',
        fontSize:32,
        color:'purple',

    },
    textHealthBox:{
        fontFamily:'Raleway-Bold',
        fontSize:18,
        color:'purple',
        justifyContent:'space-between',
    }

})  