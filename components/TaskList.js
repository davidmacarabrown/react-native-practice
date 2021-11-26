import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../assets/colors/colors';
import TaskItem from './TaskItem';

const TaskList =  ({ tasks, onPressFunction, onPressFunctionTwo }) => {

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
        paddingTop: '1%',
        paddingHorizontal: '5%',
        borderRadius: 10,
        color: colors.primary
    },
    
    items:{
        marginTop:'3%'
    }
})

export default TaskList;