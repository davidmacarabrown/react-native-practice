import React from 'react';
import { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

import Profile from './Profile'
import TaskList from '../components/TaskList'

const Home = ({navigation}) => {

    const [userData, setUserData] = useState({})
    const [taskData, setTaskData] = useState([])

    const [newTaskName, setNewTaskName] = useState(null)
    const [newTaskDescription, setNewTaskDescription] = useState(null)

    const loadUserData = function(userId){
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => alert(error))
    }

    const loadTaskData = (userId) => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks')
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert(error))
    }

    const addTask = function(userId){

        console.log(newTaskName, newTaskDescription)

        const payload = {
            "name": newTaskName,
            "description": newTaskDescription
        }

        if (newTaskName && newTaskDescription){

            fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks', {

                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
                .then((response) => response.json())
                .then((json) => setTasks(json))

                setNewTaskDescription(null)
                setNewTaskName(null)

            } else {
                alert("Please complete all fields.")
            }
    }

    const markComplete = function(userId, taskId){

        const filter = (data) => {
            setUserData(data.user)
            setTaskData(data.tasks)
        }

        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString() + '/markcomplete', {
            method: 'PATCH'
        }).then((response) => response.json())
        .then((json) => filter(json))
        .catch((error) => alert(error))
    };

    const deleteTask = function(userId, taskId){
        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert(error))
    }

    useEffect(() => {
        loadUserData(1)
        loadTaskData(1)
    }, [])

    return(
        <View>
                { taskData.length === 0 || userData === {} ? 
                <SafeAreaView style={styles.loadingIndicator}>
                    <ActivityIndicator size="large" />
                </SafeAreaView>
                :
                <SafeAreaView>
                    <Profile props={userData}></Profile>
                </SafeAreaView>
                }
                <SafeAreaView>
                    <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask} addTask={addTask}/>
                </SafeAreaView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

    loadingIndicator: {
        alignContent: 'center',
        paddingTop: '50%'
    }
})