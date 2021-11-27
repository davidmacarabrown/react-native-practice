import React, { useContext, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Button,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import Profile from './Profile';
import StyledButton from '../components/StyledButton';
import TaskList from '../components/TaskList';
import colors from '../assets/colors/colors';

import { Context } from './Store';

const Home = ({ navigation }) => {

    const isFocused = useIsFocused();

    const userId = 1;
    
    const [userData, setUserData] = useContext(Context)
    const [taskData, setTaskData] = useState([])

    const loadUserData = (userId) => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/')
        .then((response) => response.json())
        .then((json) => setUserData(json))
        .catch((error) => console.error(error))
    }

    const loadTaskData = (userId) => {
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

    const loadData = () => {
        loadUserData(userId)
        loadTaskData(userId)
    }

    useEffect(() => {
        loadData()
    }, [isFocused])

    const taskFormLoad = () => {
        navigation.navigate('TaskForm', {id: userData.id})
    }

    return(
        <View style={{backgroundColor: colors.background}}>
            {!userData ? 
            <View style={styles.loadingIndicator}>
                <ActivityIndicator size="large" />
                <StyledButton text="Retry" callBack={loadData} color={colors.secondary} isDisabled={false}/>
            </View>
            :
            <ScrollView>
                <Profile props={userData} />
                <StyledButton 
                    text="+"
                    callBack={taskFormLoad}
                    color={colors.auxiliary}
                    isDisabled={false}
                />
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
        paddingTop: '30%',
        paddingBottom: '30%'
    }
})