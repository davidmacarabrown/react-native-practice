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

    const loadUserData = () => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => alert("Service Unavailable"))
    }

    const loadTaskData = () => {
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

        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString() + '/markcomplete', {
            method: 'PATCH'
        }).then((response) => response.json())
        .then((json) => filter(json))
        .catch((error) => alert("Service Unavailable"))
    };

    const deleteTask = (taskId) => {
        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => alert("Service Unavailable"))
    }

    const refresh = () => {
        loadUserData(userId)
        loadTaskData(userId)
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
                    <Button title="Retry" onPress={refresh}/>
                </SafeAreaView>
                :
                <View>
                    <SafeAreaView>
                        <Profile props={userData}></Profile>
                    </SafeAreaView>
                    <View>
                        <Button title="Add Task" onPress={() => {navigation.navigate('TaskForm', {id: userData.id})}}/>
                    </View>
                    <SafeAreaView>
                        <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask}/>
                    </SafeAreaView>
                </View>
                }
                
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