import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const TaskItem = (props) => {

    return(
            <View>
                
                <View style={styles.taskItem}>

                    <View>
                        <Text style={styles.taskName}>{props.item.name}</Text>
                    </View>

                        <View style={styles.taskButtonContainer}>
                            {
                                !props.item.status ?
                                <TouchableOpacity onPress={props.markComplete}>
                                        <Feather
                                            name="check-circle"
                                            size={32}
                                            color={"#cc491e"} 
                                        />
                                </TouchableOpacity> 
                                :
                                <Feather
                                        name="check"
                                        size={32}
                                        color={"#61cc1e"}
                                    />
                            }
                            <TouchableOpacity>
                                <Feather 
                                    name="edit"
                                    size={28}
                                    color={'#f99a13'}
                                />
                            </TouchableOpacity>

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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor:colors.primary,
        borderRadius:10
    },

    taskName:{
        width:'100%',
        color:'white',
        fontFamily:'Raleway-Bold',
        fontSize:25,
    },

    taskButtonContainer:{
        flex: 1,
        flexDirection:'row',
        
    }
    }
)

export default TaskItem;
