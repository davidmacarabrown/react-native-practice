import React from 'react';
import {Dimensions, Text, TouchableOpacity, Feather, Image, View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';

const profileHeight = Dimensions.get("screen").height / 5

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
        height:profileHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:colors.secondary,
        borderRadius:12,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '6%',
        marginBottom: '6%'
    },

    avatarImage:{
        flex: 1,
        resizeMode: 'contain',
        width: '80%',
        height: '80%',
        marginTop: '5%',
        marginLeft: '2%',
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