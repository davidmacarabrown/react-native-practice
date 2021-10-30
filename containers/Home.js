import React from 'react';
import { useState, useEffect } from 'react';
import {
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
    const [userLoading, setUserLoading] = useState(true)

    const [taskData, setTaskData] = useState([])
    const [tasksLoading, setTasksLoading] = useState(true)

    const loadUserData = function(userId){
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => alert(error))
        .finally(setUserLoading(false))
    }

    const loadTaskData = (userId) => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks')
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert(error))
        .finally((setTasksLoading(false)))
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
        {console.log(userData, "======================================")}
            { userLoading ? 
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
            :
            <SafeAreaView>
                <Profile props={userData}></Profile>
            </SafeAreaView>
            }
            <View>
                <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask}/>
            </View>
        </View>
    )
}

export default Home;