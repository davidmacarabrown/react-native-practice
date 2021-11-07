import React from 'react';
import {Dimensions, Text, TouchableOpacity, Feather, Image, View, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

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
        width: '95%',
        height: '19%',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    avatarImage:{
        flex: 1,
        resizeMode: 'center',
        width: '100%',
        height: '100%',
        marginLeft: '4%',
        marginRight: '4%'
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
        alignItems: 'flex-start',
        marginTop: '5%'
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
        textAlign: 'center',
        marginBottom: '10%'
    }
})  