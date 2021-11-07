import React from 'react';
import {Dimensions, Text, TouchableOpacity, Feather, Image, View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';

export default function Profile ({props}) {

    return(
            <View style={styles.profileWrapper}>

                <Image source={require('../assets/images/avatar.jpg')} style={styles.avatarImage}/>

                <View style={styles.infoContainer}>

                    <View>
                        <Text style={styles.textLarge}>{props.username}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                        <Text style={styles.textSmall}>XP: </Text>
                        <Text style={styles.textSmall}>{props.currentXp}/{props.maximumXp}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                        <Text style={styles.textSmall}>Lvl: </Text>
                        <Text style={styles.textSmall}>{props.level}</Text>
                    </View>

                </View>
                
            </View>
    )
}

const styles = StyleSheet.create({

    profileWrapper:{
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:colors.secondary,
        borderRadius:12,
        margin: '3%'
    },

    avatarImage:{
        flex: 1,
        resizeMode: 'contain',
        width: '90%',
        height: '90%',
        marginTop: '2%',
        borderRadius: 20
    },

    detailWrapper:{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
    },
    
    infoContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%'
    },
    
    textSmall:{
        fontFamily:'Raleway-Bold',
        fontSize:18,
        color:'white',
        textAlign: 'center'
    },

    textLarge:{
        fontFamily:'Raleway-Bold',
        fontSize:32,
        color:'white',
        textAlign: 'center',
        marginBottom: '10%'
    }
})  