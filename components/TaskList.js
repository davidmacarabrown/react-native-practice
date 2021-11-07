import React from 'react';
import {StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';
import colors from '../assets/colors/colors';
import TaskItem from './TaskItem';

const TaskList =  ({tasks, onPressFunction, onPressFunctionTwo}) => {

    const renderItem = ({item}) => {

        return(
            <View style={Styles.items}>
            <TaskItem 
                item={item}
                markComplete={()=> onPressFunction(item.id)}
                deleteTask={()=> onPressFunctionTwo(item.id)}
                />
            </View>
        )
    }

    return(
                 <FlatList 
                    style={Styles.tasksWrapper}
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                 />
    )
}

const Styles = StyleSheet.create({

    tasksWrapper:{
        paddingTop: 10,
        paddingHorizontal: 20,
        borderRadius:10,
        color:colors.primary,
    },
    
    items:{
        marginTop:'5%',
    }
})

export default TaskList;