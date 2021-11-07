import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const TaskItem = (props) => {

    return(
            <View>
                
                <View style={styles.taskItem}>

                    <View style={styles.textContainer}>
                        <Text style={styles.taskName}>{props.item.name}</Text>
                        <Text style={styles.taskDescription}>{props.item.description}</Text>
                    </View>
                    
                    
                    <View style={styles.taskButtonContainer}>

                        <TouchableOpacity>
                            <Feather 
                                name="edit"
                                size={28}
                                color={'#f99a13'}
                            />
                        </TouchableOpacity>

                        <View style={styles.complete}>
                        {!props.item.status ?
                            <TouchableOpacity onPress={props.markComplete}>
                                    <Feather
                                        name="check-circle"
                                        size={50}
                                        color={"#cc491e"} 
                                    />
                            </TouchableOpacity> 
                            :
                            <Feather
                                    name="check-circle"
                                    size={50}
                                    color={"#61cc1e"}
                                />
                        }
                        </View>

                        <TouchableOpacity onPress={props.deleteTask}>
                            <Feather name="x-circle"
                                    size={28}
                                    color={"#b53833"}
                                        
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    taskItem:{
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '4%',
        backgroundColor:colors.primary,
        borderRadius:10
    },

    textContainer:{
        flex: 1,
        flexDirection: 'column'
    },

    taskName:{
        color:'white',
        fontFamily:'Raleway-Bold',
        fontSize:25,
    },

    taskDescription: {
        color: 'white'
    },

    taskButtonContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: '3%'
    },

    complete: {
        paddingLeft: '5%',
        paddingRight: '5%'
    }
    }
)

export default TaskItem;
