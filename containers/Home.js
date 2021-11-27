import React from 'react';
import { useContext, useEffect } from 'react';
import {
    ActivityIndicator,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import Profile from './Profile';
import TaskList from '../components/TaskList';
import colors from '../assets/colors/colors';

import { Context } from './Store';

const Home = ({navigation}) => {

    const isFocused = useIsFocused();

    const {user, tasks} = useContext(Context);
    const [userData, setUserData] = user
    const [taskData, setTaskData] = tasks

    const loadTaskData = (userId) => {
        console.log("+++++++++", userData)
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks')
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => console.error(error))
    }

    const markComplete = (taskId) => {
        const filter = (data) => {
            setUserData(data.user)
            setTaskData(data.tasks)
        }
        fetch('http://10.0.2.2:8080/users/'+ userData.id.toString() +'/tasks/' + taskId.toString() + '/markcomplete', {
            method: 'PATCH'
        }).then((response) => response.json())
        .then((json) => filter(json))
        .catch((error) => console.error(error))
    };

    const deleteTask = (taskId) => {
        fetch('http://10.0.2.2:8080/users/'+ userData.id.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        loadTaskData(1)
    }, [isFocused])

    return(
        <View style={{backgroundColor: colors.background}}>
            {userData === {} ? 
            <View style={styles.loadingIndicator}>
                <ActivityIndicator size="large" />
                <Button title="Retry" onPress={refresh}/>
            </View>
            :
            <ScrollView>
                <Profile props={userData} />

                <TouchableOpacity style={styles.buttonWrapper} title="Add Task" onPress={() => {navigation.navigate('TaskForm', {id: userData.id})}}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <View>
                    <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask}/>
                </View>
            </ScrollView>
            }
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

    loadingIndicator: {
        alignContent: 'center',
        paddingTop: '50%'
    },

    buttonWrapper:{
        backgroundColor: colors.auxiliary,
        borderRadius: 12,
        marginLeft: '6%',
        marginRight: '6%'
    },

    buttonText: {
        color: 'white',
        fontSize: 24,
        padding: '2%',
        textAlign: 'center'
    }
})