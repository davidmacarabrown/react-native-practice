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
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

import Profile from './Profile'
import TaskList from '../components/TaskList'
import colors from '../assets/colors/colors';

const Home = ({navigation}) => {

    const [userData, setUserData] = useState({})
    const [taskData, setTaskData] = useState([])

    const userId = 1;

    const loadUserData = () => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json)=> setUserData(json))
        .catch((error) => console.error(error))
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
        .catch((error) => console.error(error))
    };

    const deleteTask = (taskId) => {
        fetch('http://10.0.2.2:8080/users/'+ userId.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => console.error(error))
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