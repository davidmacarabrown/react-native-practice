import React from 'react';
import { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    Button,
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

    const userId = 1;

    const loadUserData = function(){
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => alert(error))
    }

    const loadTaskData = () => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks')
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert(error))
    }

    const addTask = function(){

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

    const markComplete = function(taskId){

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

    const deleteTask = function(taskId){
        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert(error))
    }

    const saveTask = (name, description) => {

        console.log(name, description);

        const payload = {
            "name": name,
            "description": description
        }

        if (name && description){

            fetch('http://10.0.2.2:8080/users/' + id.toString() + '/tasks', {

                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })

            } else {
                alert("Please complete all fields.")
            }
    }

    useEffect(() => {
        loadUserData(userId)
        loadTaskData(userId)
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
                <View>
                    <Button title="Add Task" onPress={() => {navigation.navigate('TaskForm', {id: userData.id, save: addTask})}}/>
                </View>
                <SafeAreaView>
                    <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask}/>
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