import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import colors from '../assets/colors/colors';
import TaskItem from './TaskItem';

const TaskList =  ({tasks, onPressFunction, onPressFunctionTwo}) => {

    const renderItem = ({item}) => {

        return(
            <View>
            <TaskItem 
                item={item}
                markComplete={()=> onPressFunction(item.id)}
                deleteTask={()=> onPressFunctionTwo(item.id)}
                />
            </View>
        )
    }

    return(
        <View style={Styles.tasksWrapper}>
                 <FlatList 
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                 />
        </View>
    )
}

const Styles = StyleSheet.create({

    tasksWrapper:{
        paddingTop: 10,
        paddingHorizontal: 20,
        borderRadius:10,
        color:colors.primary,
        
    },
    sectionTitle:{
        fontFamily:'Raleway-Bold',
        fontSize: 24,
       
    },
    items:{
        marginTop:30,
    }
})

export default TaskList;